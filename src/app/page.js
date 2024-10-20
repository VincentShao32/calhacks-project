"use client";
import { SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {

    // const [typedText, setTypedText] = useState("");
  // const fullText = "your day planned with us, everything you need";
  // const typingSpeed = 100;

  // useEffect(() => {
  //   let index = 0;
  //   let repeatInterval;

  //   const startTyping = () => {
  //     const interval = setInterval(() => {
  //       setTypedText((prev) => prev + fullText[index]);
  //       index++;
  //       if (index === fullText.length) {
  //         clearInterval(interval);
  //         setTimeout(() => {
  //           setTypedText("");
  //           index = 0;
  //         }, 2000); // Pause for a second before resetting
  //       }
  //     }, typingSpeed);
  //   };

  //   startTyping(); // Start the first typing

  //   repeatInterval = setInterval(() => {
  //     startTyping();
  //   }, fullText.length * typingSpeed + 2000); // Time for the full typing + 1 second pause

  //   const stopTypingAfter10Sec = setTimeout(() => {
  //     clearInterval(repeatInterval);
  //   }, 10000); // Stop the repetition after 10 seconds

  //   return () => {
  //     clearInterval(repeatInterval);
  //     clearTimeout(stopTypingAfter10Sec);
  //   };
  // }, []);

  const handleScrollToTrips = () => {
    const tripsSection = document.getElementById("trips-section");
    if (tripsSection) {
      tripsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-transparent">
      <div className="flex items-center w-full min-h-screen">
        <div className="flex flex-col w-fit mx-auto items-center gap-5">
        <h1 className="text-7xl font-bold font-nunito-sans">
          <span className="text-[#6038fb]">Try </span>
          <span className="bg-gradient-to-r from-[#6038fb] to-[#60a5fa] text-transparent bg-clip-text">
            DayGeine
          </span>
        </h1>
          <h1 className="text-4xl text-[#FFFFFF] font-nunito-sans text-highlight">
            from anywhere, to anywhere, within seconds
          </h1>

          <div className="flex gap-5 pt-8">
            <SignedOut>
              <SignInButton className="bg-highlight text-white rounded-full py-2 px-4 text-lg hover:bg-gray-600">
                Get Started
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link
                href="/trips"
                onClick={handleScrollToTrips}
                className="py-2 px-4 bg-highlight text-white rounded-full text-lg hover:bg-[#6038fb] hover:scale-105 hover:shadow-md transition-all ease-in-out duration-300"
              >
                Get Started
              </Link>
            </SignedIn>
            <button className="bg-[#a6d8ff] py-2 px-4 border-1 border-highlight text-white rounded-full text-lg hover:bg-[#6038fb] transition ease-in-out duration-300 hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
       <div className="w-[50%] h-full absolute left-0 top-0 bg-gradient-to-br from-primary from-1% to-background to-30% -z-10 transition-colors duration-1000"></div>
      <div className="w-[50%] h-full absolute right-0 top-0 bg-gradient-to-br from-background from-70% to-secondary to-99% -z-10 transition-colors duration-1000"></div>
      <div className="min-h-screen bg-background" id="trips-section">
        <div className="flex flex-col items-center gap-20 py-20">
          <h2 className="bg-gradient-to-r from-[#6038fb] to-[#60a5fa] text-transparent text-6xl font-bold font-nunito-sans bg-clip-text">Explore Our Plan</h2>
          <p className="text-3xl text-gray-500 text-center max-w-6xl">
          The process is incredibly simple: Don't explain every detail of your plan — Just mention a date, and DayGeine will scan your Google Calendar to come up with the perfect recommendations that align with your sechedule.
          </p>
        </div>
      </div>
      <div className="min-h-screen bg-background transition-colors duration-1000">
        <div className="flex flex-col items-center gap-5 py-20">
          <h2 className="bg-gradient-to-r from-[#6038fb] to-[#60a5fa] text-transparent text-6xl font-bold font-nunito-sans bg-clip-text">Why Choose DayGeine?</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl">
            We provide the best travel options tailored to your preferences, ensuring you get to your dream destinations quickly, comfortably, and affordably.
          </p>
        </div>
      </div>
      <div className="min-h-screen bg-background transition-colors duration-1000">
        <div className="flex flex-col items-center gap-5 py-20">
          <h2 className="bg-gradient-to-r from-[#6038fb] to-[#60a5fa] text-transparent text-6xl font-bold font-nunito-sans bg-clip-text">How it Works</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl">
            Hear from our happy travelers about their experiences using DayGeine. Our customers love the convenience and flexibility we provide.
          </p>
        </div>
      </div>
      <div className="min-h-screen bg-background transition-colors duration-1000">
        <div className="flex flex-col items-center gap-5 py-20">
          <h2 className="bg-gradient-to-r from-[#6038fb] to-[#60a5fa] text-transparent text-6xl font-bold font-nunito-sans bg-clip-text">Ready to Travel?</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl">
            Sign up today and start planning your next adventure. With DayGeine, the possibilities are endless!
          </p>
        </div>
      </div>
    </div>
  );

}
