"use client";

import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Particles } from "./particles";

interface TreeItem {
  icon?: string;
  label: string;
  expanded?: boolean;
  children?: TreeItem[];
}

export function Knowledge() {
  const treeData: TreeItem[] = [
    {
      label: "People",
      expanded: true,
      children: [
        { label: "Andrew Huberman", icon: "👤" },
        { label: "Mira Murati", icon: "👤" },
        {
          label: "Sam Altman",
          icon: "👤",
          expanded: true,
          children: [
            {
              label: "The Future of AI | Lex Fridman Podcast",
              icon: "🎙️",
            },
            {
              label:
                "Sam Altman wants Washington's backing for his $7 trillion AI chip venture",
              icon: "📰",
            },
          ],
        },
      ],
    },
    {
      label: "Companies",
      expanded: true,
      children: [
        {
          label: "OpenAI",
          icon: "🤖",
          expanded: true,
          children: [
            {
              label:
                "OpenAI's 'Sora' Has Rivals In The Works—Including From Google And Meta",
              icon: "📰",
            },
          ],
        },
        { label: "Neuralink", icon: "🧠" },
        { label: "Anthropic", icon: "🔮" },
      ],
    },
    { label: "Places", icon: "📍" },
    { label: "Books", icon: "📚" },
  ];

  const renderTreeItem = (item: TreeItem, depth: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = item.expanded;

    return (
      <div
        key={item.label}
        style={{ marginLeft: `${depth * 16}px` }}
        className="relative"
      >
        <div
          className={`flex items-center gap-2 py-1 px-2 rounded-lg text-sm ${
            depth === 0 ? "text-gray-200 font-medium" : "text-gray-400"
          } hover:bg-white/5`}
        >
          {hasChildren && (
            <span className="text-gray-500">
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </span>
          )}
          {item.icon && <span>{item.icon}</span>}
          <span>{item.label}</span>
        </div>
        {hasChildren && isExpanded && (
          <div className="mt-1">
            {item.children!.map((child) => renderTreeItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-32 relative">
      {/* Top gradient separator */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-purple-500/10 via-purple-500/5 to-transparent" />

      {/* Bottom gradient separator */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-purple-500/10 via-purple-500/5 to-transparent" />

      {/* Radial gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      </div>

      {/* Floating particles */}
      <Particles
        className="absolute inset-0"
        quantity={50}
        staticity={30}
        ease={70}
        color="#a855f7"
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-white/80 bg-clip-text text-transparent">
              Build your knowledge
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Your saved content is automatically categorized based on what it
              mentions providing an intuitive way of organizing your content and
              making it effortless to find again when its needed.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-75" />
            <div className="relative bg-[#14151F]/80 backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-[0_0_50px_rgba(168,85,247,0.15)] hover:shadow-[0_0_50px_rgba(168,85,247,0.25)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-2xl" />
              <div className="space-y-1 relative">
                {treeData.map((item) => renderTreeItem(item))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
