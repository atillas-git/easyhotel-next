"use client";
import Drawer from "@/components/Drawer";
import HTable from "@/components/HTable";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";
import {
  AiOutlineUserAdd,
  AiOutlineDown,
  AiOutlineUsergroupAdd,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiAddToQueue, BiBuildings, BiImport } from "react-icons/bi";
const Hr = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex flex-col h-full p-4">
      <section className="flex items-center justify-between">
        <Dropdown>
          <DropdownTrigger>
            <Button className="bg-teal-500 text-teal-50">
              <BiAddToQueue />
              <span className="font-semibold">Add</span>
              <AiOutlineDown />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem startContent={<BiBuildings />}>
              Add Department
            </DropdownItem>
            <DropdownItem startContent={<AiOutlineUserAdd />}>
              <span>Add Employee</span>
            </DropdownItem>
            <DropdownItem startContent={<BiImport />}>
              Bulk Import Departments
            </DropdownItem>
            <DropdownItem startContent={<AiOutlineUsergroupAdd />}>
              Bulk Import Employees
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger>
            <Button className="bg-teal-500 text-teal-50">
              <AiOutlineSearch />
              <span>Search</span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem onClick={() => setOpen(true)}>
              Search Employees
            </DropdownItem>
            <DropdownItem>Search Departments</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>
      <Drawer open={open} handleClose={() => setOpen(false)}>
        hello
      </Drawer>
      <section id="tablecontainer" className="w-full h-full mt-2">
        <HTable />
      </section>
    </div>
  );
};

export default Hr;
