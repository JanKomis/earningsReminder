"use client";

import { Button, buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function SignIn() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <>
      {pathName === "/signin" ? (
        <Link href={"/"} className={buttonVariants({ variant: "outline" })}>
          Back to homepage
        </Link>
      ) : (
        <Link
          href={"/signin"}
          className={buttonVariants({ variant: "outline" })}
        >
          Sign In
        </Link>
      )}
    </>
  );
}
