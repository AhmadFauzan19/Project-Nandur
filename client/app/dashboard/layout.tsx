import Navbar from "@/components/Admin/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="px-24">{children}</div>
    </div>
  );
}
