import React from "react";
import {
  Brain,
  Newspaper,
  FileText,
  Youtube,
  Radio,
  Rss,
  BookOpen,
} from "lucide-react";

const sourceNodes = [
  { icon: <Newspaper className="w-8 h-8" />, label: "News" },
  { icon: <FileText className="w-8 h-8" />, label: "PDFs" },
  { icon: <Youtube className="w-8 h-8" />, label: "Videos" },
  { icon: <Radio className="w-8 h-8" />, label: "Podcasts" },
  { icon: <Rss className="w-8 h-8" />, label: "Blogs" },
  { icon: <BookOpen className="w-8 h-8" />, label: "Wiki" },
];

export function SummarizeTab() {
  const calculatePaths = () => {
    const targetX = 900;
    const targetY = 300;
    const radius = 280; // Increased radius
    const startAngle = -Math.PI / 3;
    const endAngle = Math.PI / 3;

    return sourceNodes.map((_, index) => {
      const angle =
        startAngle +
        (index * (endAngle - startAngle)) / (sourceNodes.length - 1);
      const x = 200 + radius * Math.cos(angle);
      const y = 300 + radius * Math.sin(angle);
      const dx = targetX - x;
      const dy = targetY - y;
      const cp1x = x + dx * 0.5;
      const cp1y = y + dy * 0.1;
      const cp2x = x + dx * 0.7;
      const cp2y = y + dy * 0.9;

      return {
        path: `M ${x} ${y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${targetX} ${targetY}`,
        x,
        y,
      };
    });
  };

  const beamPaths = calculatePaths();

  return (
    <div className="relative h-[600px] max-w-[1200px] mx-auto">
      {" "}
      {/* Increased height and width */}
      <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
        {" "}
        {/* Increased viewBox */}
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#4f46e5" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.1" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {beamPaths.map((pathData, index) => (
          <g key={index}>
            <path
              d={pathData.path}
              className="stroke-[3]" // Increased stroke width
              style={{ stroke: "url(#pathGradient)" }}
              fill="none"
            />
            <circle
              cx={pathData.x}
              cy={pathData.y}
              r="40" // Increased circle size
              className="fill-white/5"
            />
            <foreignObject
              x={pathData.x - 32}
              y={pathData.y - 32}
              width="64"
              height="64"
              className="overflow-visible"
            >
              <div className="flex items-center justify-center w-full h-full">
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  {sourceNodes[index].icon}
                </div>
              </div>
            </foreignObject>
            <circle
              r="4" // Increased dot size
              fill="#4f46e5"
              className="animate-move-dot"
              filter="url(#glow)"
              style={{
                offsetPath: `path("${pathData.path}")`,
                animationDelay: `${index * 0.5}s`,
                animationDuration: "3s",
              }}
            >
              <animate
                attributeName="opacity"
                values="0;0.8;0"
                dur="3s"
                repeatCount="indefinite"
                begin={`${index * 0.5}s`}
              />
            </circle>
          </g>
        ))}
        {/* Target Node */}
        <g transform="translate(900, 300)">
          {" "}
          {/* Adjusted position */}
          <circle r="48" className="fill-white/5" /> {/* Increased size */}
          <foreignObject x="-24" y="-24" width="48" height="48">
            <div className="flex items-center justify-center w-full h-full">
              <Brain className="w-12 h-12 text-blue-400" />{" "}
              {/* Increased icon size */}
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  );
}
