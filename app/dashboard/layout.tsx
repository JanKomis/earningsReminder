
import Sidebar from "@/components/sidebar/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Page",
  description: "This is a description of the  page",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
//<Sidebar />
