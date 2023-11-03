"use client";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import React from "react";
import {
  AiOutlineDashboard,
  AiOutlineDesktop,
  AiOutlineMore,
} from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
export const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 w-full h-full items-center p-2">
      <header className="p-2 font-semibold text-lg border-b w-full text-center border-teal-100">
        EasyHotel
      </header>
      <section className=""></section>
      <nav className="flex flex-col items-center w-full justify-center gap-1">
        <h6 className="w-full font-semibold text-left text-sm underline underline-offset-4">
          Overview
        </h6>
        <Accordion
          itemClasses={{
            indicator: "text-teal-50 text-md",
            title: "text-teal-50 text-md",
          }}
        >
          <AccordionItem
            aria-label="Dashboard"
            title="Dashboard"
          ></AccordionItem>
        </Accordion>
        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-teal-700 text-center transition-all w-full cursor-pointer">
          <SiGoogleanalytics />
          Analytics
        </div>
        <h6 className="w-full font-semibold text-left text-sm underline underline-offset-4">
          Features
        </h6>
      </nav>
      <footer className="flex items-center justify-between mt-auto bg-teal-700 p-3 w-full rounded-lg">
        <div className="flex items-center gap-2">
          <Avatar />
          <section className="flex flex-col">
            <p>Sina Postacı</p>
            <small className="text-xs text-teal-200">sina.postaci</small>
          </section>
        </div>
        <div>
          <AiOutlineMore />
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
