import React, { useState } from "react";
import { Check } from "lucide-react";
import { Particles } from "../sections/home/particles";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export function ReviewTab() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const question: Question = {
    id: 1,
    text: "What is a Large Language Model?",
    options: [
      "A method for converting spoken language into written text.",
      "Software interpreting natural human language.",
      "An AI model trained on vast text data.",
      "An antivirus software detecting malicious code.",
    ],
    correctAnswer: 2,
  };

  const handleOptionSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  return (
    <div className="relative h-[500px] max-w-[1000px] mx-auto">
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent opacity-50" />

      {/* Left Side Q&A Card */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-64 bg-[#14151F]/80 rounded-2xl p-6 transform -rotate-6 border border-purple-500/10 backdrop-blur-sm">
        <Particles
          className="absolute inset-0"
          quantity={20}
          staticity={50}
          ease={50}
          color="#a855f7"
        />
        <h3 className="text-sm font-medium mb-3 text-gray-300">
          What is prompt engineering?
        </h3>
        <div className="space-y-2">
          {[
            "Writing code",
            "Crafting effective AI inputs",
            "Hardware design",
          ].map((option, i) => (
            <div
              key={i}
              className="flex items-center gap-2 p-2 rounded-lg bg-[#1C1D2A]/50 text-xs text-gray-400"
            >
              <div className="w-3 h-3 rounded-full border border-gray-600" />
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Center Q&A Card */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px]">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
            AI generated questions
          </h2>
          <p className="text-gray-400 text-sm tracking-wide mt-2">
            to test your knowledge
          </p>
        </div>

        <div className="relative bg-[#14151F] rounded-2xl p-6 border border-purple-500/10 shadow-[0_0_50px_rgba(168,85,247,0.15)]">
          <Particles
            className="absolute inset-0"
            quantity={30}
            staticity={50}
            ease={50}
            color="#a855f7"
          />
          <div className="relative">
            <h3 className="text-lg font-medium mb-4 text-gray-200">
              {question.text}
            </h3>

            <div className="space-y-2">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center gap-3 group backdrop-blur-sm
                    ${
                      selectedAnswer === index
                        ? index === question.correctAnswer
                          ? "bg-purple-500/20 border-purple-500/30"
                          : "bg-purple-500/10 border-purple-500/20"
                        : "bg-[#1C1D2A] hover:bg-[#1C1D2A]/80 border-transparent"
                    } border`}
                >
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center border transition-all duration-300
                    ${
                      selectedAnswer === index
                        ? index === question.correctAnswer
                          ? "border-purple-500 bg-purple-500"
                          : "border-purple-400/50 bg-transparent"
                        : "border-gray-600 group-hover:border-purple-400/50"
                    }`}
                  >
                    {selectedAnswer === index &&
                      index === question.correctAnswer && (
                        <Check className="w-2 h-2 text-white" />
                      )}
                  </div>
                  <span
                    className={`flex-1 text-sm ${
                      selectedAnswer === index
                        ? index === question.correctAnswer
                          ? "text-purple-300"
                          : "text-gray-400"
                        : "text-gray-400"
                    }`}
                  >
                    {option}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Q&A Card */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-64 bg-[#14151F]/80 rounded-2xl p-6 transform rotate-6 border border-purple-500/10 backdrop-blur-sm">
        <Particles
          className="absolute inset-0"
          quantity={20}
          staticity={50}
          ease={50}
          color="#a855f7"
        />
        <h3 className="text-sm font-medium mb-3 text-gray-300">
          What is transfer learning?
        </h3>
        <div className="space-y-2">
          {[
            "Learning multiple languages",
            "Applying knowledge to new tasks",
            "Data transfer protocols",
          ].map((option, i) => (
            <div
              key={i}
              className="flex items-center gap-2 p-2 rounded-lg bg-[#1C1D2A]/50 text-xs text-gray-400"
            >
              <div className="w-3 h-3 rounded-full border border-gray-600" />
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Connecting Lines with Gradient */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`line-${i}`}
          className="absolute h-px"
          style={{
            background:
              "linear-gradient(90deg, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0) 100%)",
            width: "120px",
            transform: `rotate(${60 + i * 60}deg)`,
            left: `${25 + i * 15}%`,
            top: `${40 + i * 5}%`,
            opacity: 0.2,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
}
