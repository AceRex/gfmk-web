"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "../assets/image/unnamed (1).png";

function Header() {
  return (
    <header className="fixed top-5 left-0 w-full z-50">
      <div className="border border-white rounded-[20px] max-w-[1200px] min-w-0 m-auto">
        <div className="container mx-auto bg-white/20 backdrop-blur-md rounded-[20px] shadow-2xl max-w-[1200px] min-w-0 flex items-center justify-between h-16 px-[20px]">
          <Link href="/" className="flex items-center">
            <Image src={Logo} alt="Logo" className="h-12 w-12 object-contain" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <Link
              href="/sermons"
              className="text-white hover:text-pDark hover:font-semibold transition-all duration-300"
            >
              Sermon
            </Link>
            <Link
              href="/daily-devotion"
              className="text-white hover:text-pDark hover:font-semibold transition-all duration-300"
            >
              Daily Devotion
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-pDark hover:font-semibold transition-all duration-300"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-pDark hover:font-semibold transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="/ministers"
              className="text-white hover:text-pDark hover:font-semibold transition-all duration-300"
            >
              Meet our Ministers
            </Link>
          </nav>
          <div className="flex md:hidden">
            <CiMenuBurger size={24} aria-label="Menu" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
