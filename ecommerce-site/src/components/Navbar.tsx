"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen) {
        const target = e.target as HTMLElement;
        if (!target.closest("#navbar-menu") && !target.closest("#menu-toggle")) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <Link href="/#hero">
              SHOPNOVA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/#hero"
              className="text-gray-300 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/#categories"
              className="text-gray-300 hover:text-white"
            >
              Categories
            </Link>
            <Link
              href="/#features"
              className="text-gray-300 hover:text-white"
            >
              Features
            </Link>
            <Link
              href="/#testimonials"
              className="text-gray-300 hover:text-white"
            >
              Testimonials
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              id="menu-toggle"
              className="text-gray-300 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
            >
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        id="navbar-menu"
        className={`absolute top-16 left-0 w-full bg-gray-800 text-gray-200 shadow-md overflow-hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <Link
          href="/?name=Muhammad+Hamza&location=Pakistan&feedback=good+product"
          className="block px-4 py-2 text-gray-300 hover:text-white"
        >
          Home
        </Link>
        <Link
          href="/?name=Muhammad+Hamza&location=Pakistan&feedback=good+product#categories"
          className="block px-4 py-2 text-gray-300 hover:text-white"
        >
          Categories
        </Link>
        <Link
          href="/?name=Muhammad+Hamza&location=Pakistan&feedback=good+product#features"
          className="block px-4 py-2 text-gray-300 hover:text-white"
        >
          Features
        </Link>
        <Link
          href="/?name=Muhammad+Hamza&location=Pakistan&feedback=good+product#testimonials"
          className="block px-4 py-2 text-gray-300 hover:text-white"
        >
          Testimonials
        </Link>
      </div>
    </header>
  );
}
