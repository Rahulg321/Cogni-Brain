"use client";

import React, { useState } from "react";
import { Particles } from "./particles";
import { SummarizeTab } from "@/components/tabs/SummarizeTab";
import { ConnectTab } from "@/components/tabs/ConnectTab";
import { ReviewTab } from "@/components/tabs/ReviewTab";

export function Sources() {
  const [activeTab, setActiveTab] = useState("Summarize");

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="relative animate-fade-up">
          <div className="relative bg-gradient-to-b from-black/80 to-black/95 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-[0_0_50px_-12px_rgba(79,70,229,0.25)] hover:shadow-[0_0_50px_-12px_rgba(79,70,229,0.5)] transition-all duration-500">
            <Particles
              className="absolute inset-0"
              quantity={50}
              staticity={30}
              ease={70}
              color="#4f46e5"
            />

            <div className="relative flex justify-center gap-2 p-4 bg-gradient-to-b from-white/[0.15] to-transparent border-b border-white/10">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              {["Summarize", "Connect", "Review"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-purple-500/20 via-purple-400/20 to-purple-500/20 text-white shadow-lg shadow-purple-500/20"
                      : "text-white/60 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:via-purple-400/10 hover:to-purple-500/10"
                  }`}
                >
                  {/* Glow effect */}
                  {activeTab === tab && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-purple-500/20 rounded-full blur-md" />
                  )}

                  {/* Button content */}
                  <span className="relative">{tab}</span>
                </button>
              ))}
            </div>

            <div className="p-8 relative">
              {/* Enhanced content background gradients */}
              <div className="absolute inset-0">
                {/* Radial gradient for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-30" />

                {/* Linear gradients for subtle highlights */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-fuchsia-500/5 to-blue-500/5" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5" />

                {/* Noise texture overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4KICA8ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] opacity-5" />
              </div>

              {/* Tab content */}
              <div className="relative">
                {activeTab === "Summarize" && <SummarizeTab />}
                {activeTab === "Connect" && <ConnectTab />}
                {activeTab === "Review" && <ReviewTab />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
