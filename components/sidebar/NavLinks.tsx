"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const links = [
  {
    name: "Overview",
    path: "/dashboard",
  },
  {
    name: "Stocks",
    path: "/stocks",
  },
  {
    name: "Option chain",
    path: "/option-chain",
  },
  {
    name: "Settings",
    path: "/settings",
  },
];

export default function NavLinks() {
  const pathName = usePathname();

  return (
    <nav className="space-x-1">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={clsx(
            "text-sm font-medium text-primary hover:bg-accent py-2 px-4 rounded-full",
            { "bg-accent": pathName === link.path }
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
