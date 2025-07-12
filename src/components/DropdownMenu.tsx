import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { logOut } from "@/app/actions/authActions";
import { ensureAuthorized } from "@/lib/hooks";
import { Button } from "./ui/button";

const DropdownMenuPage = async () => {
  const session = await ensureAuthorized();
  const profileImage = session?.user?.image;
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" className="size-10 rounded-full hover:scale-105">
            <Image
              src={profileImage || "/default-avatar.png"}
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel className="text-center tracking-wider text-gray-600">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <div className="flex flex-col items-center w-full">
            <DropdownMenuItem asChild className="justify-center w-full">
              <Link
                href="/dashboard"
                className="px-3 py-1.5 rounded-md hover:bg-primary hover:text-white transition-colors tracking-widest text-center w-full cursor-pointer">
                Profile
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild className="justify-center w-full">
              <Link
                href="/dashboard/settings"
                className="px-3 py-1.5 rounded-md hover:bg-primary hover:text-white transition-colors tracking-widest text-center w-full cursor-pointer">
                Settings
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild className="justify-center w-full">
              <form action={logOut} className="w-full">
                <button
                  type="submit"
                  className="px-3 py-1.5 w-full text-center rounded-md hover:bg-destructive hover:text-white transition-colors tracking-widest cursor-pointer">
                  Log Out
                </button>
              </form>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownMenuPage;
