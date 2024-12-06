import React from "react";

export function Partners() {
  const logos = [
    {
      name: "Microsoft",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    },
    {
      name: "OpenAI",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    },
    {
      name: "Google Cloud",
      url: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg",
    },
    {
      name: "NVIDIA",
      url: "https://www.vectorlogo.zone/logos/nvidia/nvidia-ar21.svg",
    },
    {
      name: "Hugging Face",
      url: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo-with-title.svg",
    },
  ];

  return (
    <section className="relative py-12">
      <div className="relative bg-black/30 backdrop-blur-sm border-y border-white/5 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl font-semibold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent mb-12">
            Technology behind our solution
          </h2>

          <div className="relative w-full overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/90 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/90 to-transparent z-10" />

            <div className="flex gap-24 animate-scroll">
              {/* First set of logos */}
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex-shrink-0 w-32 h-12 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="w-full h-full object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo) => (
                <div
                  key={`${logo.name}-duplicate`}
                  className="flex-shrink-0 w-32 h-12 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="w-full h-full object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
