import DashboardLinks from "@/components/DashboardLinks";
import SideNavbar from "@/components/SideNavbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { logOut } from "../actions/authActions";
import { ensureAuthorized } from "@/lib/hooks";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await ensureAuthorized();
  const profileImage = session?.user?.image;

  return (
    <div className="min-h-screen w-full grid md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
      <SideNavbar />
      <div className="flex flex-col">
        <header className="flex h-25 md:15 items-center gap-5 border-b bg-muted/50 px-4 lg:h-[70px] lg:px-8">
          {/* Mobile Sidebar */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden">
                <FontAwesomeIcon icon={faBars} className="text-lg size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col pt-12 px-3">
              <SheetTitle className="text-center text-2xl text-primary font-semibold border-b border-gray-200 pb-4">
                Menu
              </SheetTitle>
              <nav className="grid gap-2">
                <DashboardLinks />
              </nav>
            </SheetContent>
          </Sheet>

          {/* Right-side Actions */}
          <div className="ml-auto flex items-center gap-5">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="icon"
                  className="size-10 rounded-full hover:scale-105">
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
        </header>

        {/* Page Content */}
        <main className="flex flex-1 flex-col gap-5 p-4 lg:p-7 lg:gap-7 ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
