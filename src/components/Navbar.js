"use client"; // Ensure this runs as a client component
import { useState, useEffect } from "react";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true); // Track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // User scrolled down, hide navbar
      setIsVisible(false);
    } else {
      // User scrolled up, show navbar
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up listener
    };
  }, [lastScrollY]);

  const handleScrollToSection = () => {
    const section = document.getElementById("explore-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`w-full flex p-4 fixed bg-transparent text-highlight text-white font-nunito-sans z-10 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto w-fit flex gap-9 justify-between text-2xl">
        <Link
          href="/trips"
          className="px-3 py-1 rounded-md hover:bg-blue-300/50 transition-all duration-300 ease-in-out"
        >
          Home
        </Link>
        <button
          href="/"
          onClick={handleScrollToSection}
          className="px-3 py-1 rounded-md hover:bg-blue-300/50 transition-all duration-300 ease-in-out"
        >
          About
        </button>
        <SignedIn>
          <Link
            href="/"
            className="px-3 py-1 rounded-md hover:bg-blue-300/50 transition-all duration-300 ease-in-out"
          >
            Plan a Trip
          </Link>
        </SignedIn>
      </div>
      <div className="absolute right-[15px] top-[15px]">
        <SignedIn>
          <UserButton className="w-[100px]" />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
