"use client";

import React from "react";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  MdHomeFilled,
  MdSkipPrevious,
  MdAccessTime,
  MdOutlineCallToAction,
} from "react-icons/md";
import { BsRecordBtn } from "react-icons/bs";

export const getIcon = (label: string) => {
  switch (label) {
    case "Home":
      return <MdHomeFilled />;
    case "Upcoming":
      return <MdAccessTime />;
    case "Previous":
      return <MdSkipPrevious />;
    case "Recording":
      return <BsRecordBtn />;
    case "Personal Room":
      return <MdOutlineCallToAction />;
    default:
      return "home";
  }
};
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                { "bg-blue-500": isActive }
              )}
            >
              {" "}
              <p className="text-2xl">{getIcon(link.label)}</p>
              {link.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
