import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full  flex p-4 fixed bg-transparent text-highlight font-nunito-sans">
      <div className="mx-auto w-fit flex gap-6 justify-between text-lg">
        <Link href='/'>Home</Link>
        <h1>About</h1>
        <SignedIn>
          <Link href="/trips">Plan a Trip</Link>
        </SignedIn>
      </div>
      <div className='absolute right-[15px] top-[15px]'>      <SignedIn>
        <UserButton className='w-[100px]'/>
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut></div>

    </div>
  );
};

export default Navbar;
