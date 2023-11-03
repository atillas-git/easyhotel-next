"use client";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
type Option = {
  label: string;
  value: any;
};
interface IProps {
  options: Option[];
  isMulti?: boolean;
  className?: string;
  label: string;
  isRequired?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  placeHolder?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
}
const SelectForm = ({
  options,
  onChange,
  isRequired,
  className,
  label,
  placeHolder,
  isDisabled,
  isLoading,
  isInvalid,
  errorMessage,
}: IProps) => {
  return (
    <Select
      label={label}
      isRequired={isRequired}
      className={className}
      placeholder={placeHolder}
      onChange={onChange}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
    >
      {options.map((option) => {
        return (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        );
      })}
    </Select>
  );
};

export default SelectForm;
