"use client";
import { SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-transparent">
      <div className="flex items-center w-full min-h-screen">
        <div className="flex flex-col w-fit mx-auto items-center gap-4">
          <h1 className="text-7xl font-bold font-nunito-sans text-primary">
            Automate your trip planning
          </h1>
          <h1 className="text-4xl font-nunito-sans text-highlight">
            from anywhere, to anywhere, within seconds
          </h1>

          <div className="flex gap-4 pt-8 ">
            <SignedOut>
              <SignInButton className="bg-highlight text-white rounded-full py-2 px-4 text-lg hover:bg-gray-600">
                Get Started
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link
                href="/trips"
                className="bg-highlight text-white rounded-full py-2 px-4 text-lg hover:bg-gray-600 transition ease-in-out "
              >
                Get Started
              </Link>
            </SignedIn>

            <button className=" bg-background py-2 px-4 border-2 border-highlight text-black rounded-full text-lg hover:border-gray-600 transition ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full absolute left-0 top-0 bg-gradient-to-br from-primary from-1% to-background to-30% -z-10"></div>
      <div className="w-[50%] h-full absolute right-0 top-0 bg-gradient-to-br from-background from-70% to-secondary to-99% -z-10"></div>
    </div>
  );
}
