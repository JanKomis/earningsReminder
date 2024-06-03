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
    <div className="flex pb-8">
      <Sidebar />
      <div className="flex-1 px-12">{children}</div>
    </div>
  );
}
//<Sidebar />
