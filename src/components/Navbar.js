import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full  flex py-4 fixed bg-primary text-white font-nunito-sans">
      <div className="mx-auto w-fit flex gap-6 justify-between text-lg">
        <h1>Home</h1>
        <h1>About</h1>
        <SignedIn>
          <Link href="/trips">Plan a Trip</Link>
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
