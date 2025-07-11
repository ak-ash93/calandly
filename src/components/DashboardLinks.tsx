"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faGear,
  faHouse,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavlinkProps {
  id: number;
  href: string;
  icon: ReactNode;
  label: string;
}

export const navLinks: NavlinkProps[] = [
  {
    id: 0,
    label: "Events",
    icon: <FontAwesomeIcon icon={faHouse} className="text-xl" />,
    href: "/dashboard/events",
  },
  {
    id: 1,
    label: "Meetings",
    icon: <FontAwesomeIcon icon={faUsers} className="text-xl" />,
    href: "/dashboard/meetings",
  },
  {
    id: 2,
    label: "Availability",
    icon: <FontAwesomeIcon icon={faCalendarDays} className="text-xl" />,
    href: "/dashboard/availability",
  },
  {
    id: 3,
    label: "Settings",
    icon: <FontAwesomeIcon icon={faGear} className="text-xl" />,
    href: "/dashboard/settings",
  },
];

const DashboardLinks = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-1">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.id}
            href={link.href}
            className={cn(
              "group flex items-center gap-4 px-4 py-3 h-20 rounded-xl transition-all duration-200",
              isActive
                ? "bg-primary text-white shadow-sm"
                : "text-gray-700 hover:bg-primary hover:text-foreground"
            )}>
            <span
              className={cn(
                "flex items-center justify-center rounded-md p-2 transition-colors",
                isActive ? "bg-white/20" : "bg-muted"
              )}>
              {link.icon}
            </span>
            <span className="text-sm font-medium ">{link.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default DashboardLinks;
