import { Discover } from "@/components/sections/home/discover";
import { Features } from "@/components/sections/home/features";
import { Hero } from "@/components/sections/home/hero";
import { Knowledge } from "@/components/sections/home/knowledge";
import { Partners } from "@/components/sections/home/partners";
import { Sources } from "@/components/sections/home/sources";
import React from "react";

export const metadata = {
  title: "Home",
  description:
    "Welcome to CogniBrain!! Remember more with less effort, AI-powered flashcard generation, Personalized review schedules, Interactive knowledge testing, Progress tracking and insights",
};

const page = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <Sources />
      <Features />
      <Knowledge />
      <Discover />
    </div>
  );
};

export default page;
