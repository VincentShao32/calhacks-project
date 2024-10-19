"use client";
import { SignInButton } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
  // const { userId } = auth();
  // useEffect(() => {
  //   async function get_oauth() {
  //     if (!userId) {
  //       return;
  //     }
  //     const provider = "oauth_google";
  //     const clerkResponse = await clerkClient().users.getUserOauthAccessToken(
  //       userId,
  //       provider
  //     );
  //     const accessToken = clerkResponse[0].token || "";
  //   }
  //   get_oauth();
  // }, [userId]);

  return (
    <div className=" bg-background w-full min-h-screen">
      <div className="flex items-center w-full pt-36">
        <div className="flex flex-col w-fit mx-auto items-center gap-4">
          <h1 className="text-7xl font-semibold font-nunito-sans text-primary">
            Automate your trip planning
          </h1>
          <h1 className="text-4xl font-nunito-sans text-highlight">
            from anywhere, to anywhere
          </h1>
          <p className=" text-4xl font-nunito-sans text-highlight">
            within seconds.
          </p>
          <div className="flex gap-4">
            <SignInButton className="bg-highlight text-white rounded-full py-2 px-4 text-lg">
              Get Started
            </SignInButton>
            <button className=" bg-background py-2 px-4 border-2 border-highlight text-black rounded-full text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
