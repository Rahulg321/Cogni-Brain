"use client";

import React, { useEffect, useRef } from "react";
import { BaseEdge, EdgeProps, getBezierPath } from "reactflow";

export function AnimatedEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  useEffect(() => {
    if (!pathRef.current) return;

    // Create gradient
    const gradientId = `gradient-${id}`;
    const svg = pathRef.current.closest("svg");
    if (!svg) return;

    const defs =
      svg.querySelector("defs") ||
      svg.insertBefore(
        document.createElementNS("http://www.w3.org/2000/svg", "defs"),
        svg.firstChild
      );

    const gradient = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "linearGradient"
    );
    gradient.id = gradientId;
    gradient.innerHTML = `
      <stop offset="0%" stop-color="rgba(168, 85, 247, 0.4)">
        <animate attributeName="offset" values="0;1" dur="2s" repeatCount="indefinite" />
      </stop>
      <stop offset="100%" stop-color="rgba(168, 85, 247, 0)">
        <animate attributeName="offset" values="0;1" dur="2s" repeatCount="indefinite" />
      </stop>
    `;
    defs.appendChild(gradient);

    return () => {
      gradient.remove();
    };
  }, [id]);

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} />
      <g>
        {/* Base line */}
        <path
          className="react-flow__edge-path"
          d={edgePath}
          strokeWidth={2}
          stroke="rgba(168, 85, 247, 0.2)"
          fill="none"
        />

        {/* Animated gradient line */}
        <path
          ref={pathRef}
          className="react-flow__edge-path"
          d={edgePath}
          strokeWidth={2}
          stroke={`url(#gradient-${id})`}
          fill="none"
        />

        {/* Animated dot */}
        <circle r="3" fill="#a855f7">
          <animateMotion dur="2s" repeatCount="indefinite" path={edgePath}>
            <mpath href={`#${id}`} />
          </animateMotion>
        </circle>
      </g>
    </>
  );
}
