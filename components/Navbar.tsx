import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <div className="">
          <h1 className="text-white text-3xl font-semibold">Greyoom</h1>
        </div>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut></SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
