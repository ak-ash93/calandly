import React from "react";
import Link from "next/link";
import Image from "next/image";
import { calendar } from "../../public/index";

import DialogModal from "./Dialog";

const Navbar = () => {
  return (
    <div className="flex py-2.5 px-5 items-center justify-between  shadow-md">
      <div className="flex  items-center justify-center gap-1.5">
        <div className=" rounded-full ">
          <Link href="/">
            <Image
              src={calendar}
              alt="logo-image"
              className="size-15 object-cover rounded-full"
            />
          </Link>
        </div>
        <h4 className="text-lg capitalize tracking-widest font-bold text-gray-500 ">
          Cal
          <span className="text-emerald-600  font-extrabold capitalize">
            andly
          </span>
        </h4>
      </div>
      <div>
        <DialogModal />
      </div>
    </div>
  );
};

export default Navbar;
