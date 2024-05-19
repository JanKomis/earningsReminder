
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
    <div>
      <div><Sidebar /></div>
      <div>{children}</div>
    </div>
  );
}
//<Sidebar />
