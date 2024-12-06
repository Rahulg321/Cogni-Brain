import React from "react";
import { Brain, Network, Sparkles } from "lucide-react";
import { Particles } from "./particles";

export function Features() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Intelligent Summaries",
      description: "Extract knowledge from any source instantly",
      points: [
        "Transform long-form content into concise insights",
        "Support for YouTube, podcasts, articles, and PDFs",
        "Custom summary lengths and focus areas",
        "Key points extraction and highlight generation",
      ],
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Neural Connections",
      description: "Watch your knowledge network grow automatically",
      points: [
        "Smart content linking based on context",
        "Visual knowledge graph exploration",
        "Discover hidden connections between topics",
        "Semantic search across all your content",
      ],
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Effortless Learning",
      description: "Remember more with less effort",
      points: [
        "AI-powered flashcard generation",
        "Personalized review schedules",
        "Interactive knowledge testing",
        "Progress tracking and insights",
      ],
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />

      <Particles
        className="absolute inset-0"
        quantity={50}
        staticity={30}
        ease={70}
        color="#a855f7"
      />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent mb-6">
            Transform How You Learn
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Harness the power of AI to capture, connect, and retain knowledge
            effortlessly
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* 3D Card Effect Container */}
              <div className="relative transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-[1.01]">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-purple-500/40 to-blue-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />

                {/* Card Content */}
                <div className="relative bg-[#14151F]/90 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-2xl" />

                  <div className="relative z-10">
                    <div className="bg-purple-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                      {feature.icon}
                    </div>

                    <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 mb-6">{feature.description}</p>

                    <ul className="space-y-3">
                      {feature.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div className="mt-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                          </div>
                          <span className="text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
