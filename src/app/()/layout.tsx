import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-8 min-h-screen">
      <div className="col-span-1 h-full bg-teal-500 text-teal-50">
        <Sidebar />
      </div>
      <div className="col-span-7 h-full flex flex-col">
        <Navbar />
        <section className="w-full">{children}</section>
      </div>
    </div>
  );
};

export default AppLayout;
