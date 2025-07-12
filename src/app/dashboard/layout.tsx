import DashboardLinks from "@/components/DashboardLinks";
import DropdownMenuPage from "@/components/DropdownMenu";
import SideNavbar from "@/components/SideNavbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
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
            <DropdownMenuPage />
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
