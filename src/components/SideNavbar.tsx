import Image from "next/image";
import Link from "next/link";
import React from "react";
import { calendar } from "../../public";
import DashboardLinks from "./DashboardLinks";

const SideNavbar = () => {
  return (
    <div className="hidden md:block border-r bg-muted/30 py-2 ">
      <div className="max-h-screen h-full  flex flex-col gap-3 ">
        <div className="px-5  h-23  items-center  border-b lg:h-[62px] lg:px-8 ">
          <Link href="/" className="flex items-center justify-center  gap-2 ">
            <Image src={calendar} alt="logo-image" className="size-12" />
            <p className="text-2xl font-extrabold text-gray-600 tracking-widest">
              Cal
              <span className="text-2xl font-bold text-primary tracking-widest">
                andly
              </span>
            </p>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start ">
            <DashboardLinks />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
