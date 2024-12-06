import React from "react";
import { Brain, ArrowUpRight } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Home", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Summaries", href: "#" },
      { label: "Docs", href: "#", external: true },
    ],
    feedback: [
      { label: "FAQ", href: "#" },
      { label: "Roadmap", href: "#", external: true },
      { label: "Feature Request", href: "#", external: true },
      { label: "Change Log", href: "#", external: true },
    ],
    social: [
      { label: "LinkedIn", href: "#", icon: "/linkedin.svg" },
      { label: "X", href: "#", icon: "/x.svg" },
    ],
  };

  return (
    <footer className="relative border-t border-white/10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo and Contact */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-orange-500" />
              <span className="text-xl font-semibold">Cognibrain</span>
            </div>
            <div className="space-y-3">
              <Link href="mailto:support@cognibrain.ai" className="">
                support@cognibrain.ai
              </Link>
              <p className="text-sm text-gray-600">
                © {currentYear} Cognibrain AI. All rights reserved.
              </p>
              <Link href="/privacy" className=" block">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className=" flex items-center gap-1">
                    {link.label}
                    {link.external && <ArrowUpRight className="w-3 h-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Feedback Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Feedback</h3>
            <ul className="space-y-3">
              {footerLinks.feedback.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className=" flex items-center gap-1">
                    {link.label}
                    {link.external && <ArrowUpRight className="w-3 h-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">External Links</h3>

            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
