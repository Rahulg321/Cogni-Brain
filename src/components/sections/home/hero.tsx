import React from "react";
import RainbowButton from "@/components/rainbow-button";
import GradientText from "@/components/gradient-text";

export function Hero() {
  return (
    <section className="pt-32 pb-16 relative">
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <GradientText className="mb-8">
            <span className="text-purple-300">New</span>
            <span className="h-3 w-[1px] bg-white/20 mx-2" />
            <span className="text-gray-300">Chrome Extension Available</span>
          </GradientText>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Remember Everything
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              You Read Online
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Turn your daily browsing into lasting knowledge. Our AI instantly
            captures and connects key insights from any webpage, creating your
            personal learning network.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RainbowButton className="text-lg py-3">
              Get started for free
            </RainbowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
