"use client";

import React, { useState } from "react";
import {
  Brain,
  BookOpen,
  DollarSign,
  FileText,
  ExternalLink,
  LogIn,
  UserPlus,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/blog", icon: <BookOpen className="w-4 h-4" />, text: "Blog" },
    {
      href: "/pricing",
      icon: <DollarSign className="w-4 h-4" />,
      text: "Pricing",
    },
    {
      href: "/summaries",
      icon: <FileText className="w-4 h-4" />,
      text: "Summaries",
    },
    {
      href: "https://docs.cognibrain.com",
      icon: <ExternalLink className="w-4 h-4" />,
      text: "Docs",
      isExternal: true,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <Brain className="w-8 h-8 text-primary relative transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-orange-400 group-hover:to-purple-400 bg-clip-text text-transparent transition-all duration-300">
              Cognibrain
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                text={item.text}
                isExternal={item.isExternal}
                isActive={pathname === item.href}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">
                  <LogIn className="w-4 h-4 mr-2" />
                  Log in
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Sign up
                </Link>
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                text={item.text}
                isExternal={item.isExternal}
                isActive={pathname === item.href}
              />
            ))}
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">
                  <LogIn className="w-4 h-4 mr-2" />
                  Log in
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Sign up
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavItem({
  href,
  icon,
  text,
  isExternal = false,
  isActive = false,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  isExternal?: boolean;
  isActive?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 text-sm transition-colors ${
        isActive
          ? "text-foreground font-medium"
          : "text-muted-foreground hover:text-foreground"
      }`}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon}
      {text}
      {isExternal && <ExternalLink className="w-3 h-3" />}
    </Link>
  );
}
