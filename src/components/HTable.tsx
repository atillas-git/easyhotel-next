"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  Pagination,
  Checkbox,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
const HTable = () => {
  return (
    <div className="w-full flex flex-col gap-2 border-teal-200 p-2 rounded-lg">
      <Popover>
        <PopoverTrigger>
          <Button className="flex bg-teal-500 font-semibold w-fit text-teal-50">
            Filter
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="min-w-[15rem] p-5 flex flex-col gap-7">
            <div className="flex gap-7 items-center">
              <Checkbox>Name</Checkbox>
              <RadioGroup orientation="horizontal">
                <Radio value={""}>None</Radio>
                <Radio value={"ASC"}>Asc</Radio>
                <Radio value={"Desc"}>Desc</Radio>
              </RadioGroup>
            </div>
            <div className="flex gap-7 items-center">
              <Checkbox>Name</Checkbox>
              <RadioGroup orientation="horizontal">
                <Radio value={""}>None</Radio>
                <Radio value={"ASC"}>Asc</Radio>
                <Radio value={"Desc"}>Desc</Radio>
              </RadioGroup>
            </div>
            <div className="flex gap-7 items-center">
              <Checkbox>Name</Checkbox>
              <RadioGroup orientation="horizontal">
                <Radio value={""}>None</Radio>
                <Radio value={"ASC"}>ASC</Radio>
                <Radio value={"Desc"}>DESC</Radio>
              </RadioGroup>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <Table classNames={{ base: "border-none", wrapper: "border-none p-4" }}>
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Pagination total={10} initialPage={1} />
    </div>
  );
};

export default HTable;
