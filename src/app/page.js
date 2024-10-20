"use client";
import { SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import FlowChart from "../images/FlowChart.png";

export default function Home() {
  const handleScrollToTrips = () => {
    const tripsSection = document.getElementById("trips-section");
    if (tripsSection) {
      tripsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-transparent font-nunito-sans">
      <div className="flex items-center w-full min-h-screen">
        <div className="flex flex-col w-fit mx-auto items-center gap-5">
          <h1 className="text-7xl font-bold font-nunito-sans">
            <span className="text-[#6038fb]">Try </span>
            <span className="bg-gradient-to-r from-[#6038fb] to-[#60a5fa] text-transparent bg-clip-text">
              DayGenie
            </span>
          </h1>
          <h1 className="text-4xl text-[#FFFFF] font-nunito-sans text-white">
            from anywhere, to anywhere, within seconds
          </h1>

          <div className="flex gap-5 pt-8">
            <SignedOut>
              <SignInButton className="bg-highlight text-white rounded-full py-2 px-4 text-lg z-10 hover:bg-[#6038fb] hover:scale-105 hover:shadow-md transition-all ease-in-out duration-300">
                Get Started
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link
                href="/trips"
                onClick={handleScrollToTrips}
                className="py-2 z-10 px-4 bg-highlight text-white rounded-full text-lg hover:bg-[#6038fb] hover:scale-105 hover:shadow-md transition-all ease-in-out duration-300"
              >
                Get Started
              </Link>
            </SignedIn>
            <button className="bg-[#eadef7] z-10 py-2 px-4 border-1 border-highlight text-gray-700 rounded-full text-lg hover:bg-[#6038fb] transition ease-in-out duration-300 hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full absolute left-0 top-0 bg-gradient-to-br from-primary from-1% to-background to-30% -z-10"></div>
      <div className="absolute top-0 left-0 flex flex-col w-[50%] h-fit">
        <div className="min-h-screen h-full bg-gradient-to-br from-primary from-1% to-background to-30% -z-10"></div>
        <div className="min-h-screen h-full bg-gradient-to-bl from-background from-70% to-primary to-99% -z-10 "></div>
        <div className="min-h-screen h-full bg-gradient-to-br from-primary from-1% to-background to-30% -z-10"></div>
        <div className="min-h-screen h-full bg-gradient-to-bl from-background from-70% to-primary to-99% -z-10 "></div>
        <div className="min-h-screen h-full bg-gradient-to-br from-primary from-1% to-background to-30% -z-10"></div>
        <div className="min-h-screen h-full bg-gradient-to-bl from-background from-70% to-primary to-99% -z-10 "></div>
      </div>
      <div className="absolute top-0 right-0 flex flex-col w-[50%] h-fit">
        <div className="h-full bg-gradient-to-br from-background from-70% to-secondary to-99% -z-10 min-h-screen"></div>
        <div className="h-full  bg-gradient-to-bl from-secondary from-1% to-background to-30% -z-10  min-h-screen"></div>
        <div className="h-full bg-gradient-to-br from-background from-70% to-secondary to-99% -z-10 min-h-screen"></div>
        <div className="h-full  bg-gradient-to-bl from-secondary from-1% to-background to-30% -z-10  min-h-screen"></div>
        <div className="h-full bg-gradient-to-br from-background from-70% to-secondary to-99% -z-10 min-h-screen"></div>
        <div className="h-full  bg-gradient-to-bl from-secondary from-1% to-background to-30% -z-10  min-h-screen"></div>
      </div>

      {/* <div className="w-[50%] h-full absolute right-0 top-0 bg-gradient-to-br from-background from-70% to-secondary to-99% -z-10 transition-colors duration-1000"></div>
      <div className="w-[50%] h-full absolute right-0 top-full bg-gradient-to-bl from-secondary from-1% to-transparent to-30% -z-10 transition-colors duration-1000"></div> */}

      <div className="min-h-screen flex items-center" id="trips-section">
        <div className="flex flex-col items-center gap-8 py-20 mx-auto">
          <h2 className="bg-gradient-to-r from-[#6038fb] to-[#60a5fa] text-transparent text-6xl font-bold font-nunito-sans bg-clip-text">
            Explore Our Plan
          </h2>
          <p className="text-2xl text-white text-center max-w-6xl">
            The process is incredibly simple: Don't explain every detail of your
            plan — Just mention a date, and DayGeine will scan your Google
            Calendar to come up with the perfect recommendations that align with
            your sechedule.
          </p>
        </div>
      </div>
      <div className="min-h-screen flex items-center">
        <div className="flex flex-col items-center gap-5 py-20 mx-auto">
          <h2 className="bg-gradient-to-r from-[#6038fb] to-[#60a5fa] text-transparent text-6xl font-bold font-nunito-sans bg-clip-text">
            Why Choose DayGenie?
          </h2>
          <p className="text-2xl text-white text-center max-w-3xl">
            We provide the best travel options tailored to your preferences,
            ensuring you get to your dream destinations quickly, comfortably,
            and affordably.
          </p>
        </div>
      </div>
      <div className="min-h-screen flex items-center">
        <div className="flex flex-col items-center  py-8 mx-auto">
          <h2 className="bg-gradient-to-r from-[#6038fb] to-[#60a5fa] text-transparent text-6xl font-bold font-nunito-sans bg-clip-text">
            How it Works
          </h2>
          <p className="text-gray-300 text-cente text-3xl py-7 max-w-5xl">
            We use Multi Agent WorkFlows
          </p>
          <Image
            src={FlowChart}
            alt="Workflow"
            width={1000}
            height={2000}
            className="w-full max-w-4xl"
          />
        </div>
      </div>
      <div className="min-h-screen flex items-center">
        <div className="flex flex-col items-center gap-5 ">
          <h2 className="bg-gradient-to-r from-[#6038fb] to-[#60a5fa] text-transparent text-6xl font-bold font-nunito-sans bg-clip-text">
            Ready to Travel?
          </h2>
          <p className="text-lg text-white text-center max-w-3xl">
            Sign up today and start planning your next adventure. With DayGenie,
            the possibilities are endless!
          </p>
        </div>
      </div>
    </div>
  );
}
