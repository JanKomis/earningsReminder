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
    name: "Screener",
    path: "/dashboard/screener",
  },
  {
    name: "Option chain",
    path: "/dashboard/option-chain",
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
  },
];

const settingsLink = {
  name: "Settings",
  path: "/dashboard/settings",
};

export default function NavLinks() {
  const pathName = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      {links.map((link) => (
        <Button asChild key={link.name} variant="ghost">
          <Link
            href={link.path}
            className={clsx({
              "bg-accent": pathName === link.path,
              "bg-red-500": link.path === "/dashboard/settings",
            })}
          >
            {link.name}
          </Link>
        </Button>
      ))}
    </nav>
  );
}
