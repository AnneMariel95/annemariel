import { useTheme } from "../app/theme";
import Link from "next/link";
import React, { useState } from "react";

const NavLink = ({
  href,
  children,
  onClick,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className="group relative text-primary-600 dark:text-primary-400 transition-colors"
    onClick={onClick}
    {...props}
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 dark:bg-primary-300 transition-all duration-300 group-hover:w-full" />
  </Link>
);

function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 p-6 transition-colors relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xl text-primary-500">{"<"}</span>
            <h1 className="font-bold text-xl text-primary-600 dark:text-primary-400">
              Anne Mariel
            </h1>
            <span className="font-mono text-xl text-primary-500">{"/>"}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/resume">Resume</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="https://blog.annemariel.com" target="_blank">
              Blogs
            </NavLink>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-primary-100 dark:bg-primary-800 hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? "\u2600\ufe0f" : "\ud83c\udf19"}
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-primary-100 dark:bg-primary-800 hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? "\u2600\ufe0f" : "\ud83c\udf19"}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-600 dark:text-primary-400"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "\u2715" : "\u2630"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden absolute left-0 right-0 top-full z-50 bg-neutral-50 dark:bg-neutral-900 border-t border-primary-200 dark:border-primary-700 shadow-lg">
            <div className="p-4 flex flex-col space-y-4">
              <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink href="/resume" onClick={() => setIsMenuOpen(false)}>
                Resume
              </NavLink>
              <NavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
              <NavLink href="https://blog.annemariel.com" target="_blank">
                Blogs
              </NavLink>
            </div>
          </nav>
        )}

        <p className="text-sm mt-2 text-primary-500 dark:text-primary-400 italic">
          Full-Stack Developer
        </p>
      </div>
    </header>
  );
}

export default Header;
