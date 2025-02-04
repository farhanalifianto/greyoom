"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ImFlickr2 } from "react-icons/im";
import { sidebarLinks } from "@/constants";
import { getIcon } from "./Sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <p className="text-white text-3xl">
            <ImFlickr2 />
          </p>
        </SheetTrigger>
        <SheetTitle className="hidden">x</SheetTitle>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-3xl font-semibold">
              Greyoom
            </h1>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    pathname.startsWith(`${link.route}/`);
                  return (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg justify-start text-white",
                          { "bg-blue-500": isActive }
                        )}
                      >
                        {" "}
                        <p className="text-2xl ">{getIcon(link.label)}</p>
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
