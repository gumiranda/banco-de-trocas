//@ts-ignore

import React from "react";
import { useController, FieldValues, UseControllerProps } from "react-hook-form";
import { FormErrorMessage, FormLabel, FormControl } from "@chakra-ui/react";
import { Select, Props as SelectProps, GroupBase } from "chakra-react-select";

interface ControlledSelectProps<
  FormValues extends FieldValues = FieldValues,
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<SelectProps<Option, IsMulti, Group>, "name" | "defaultValue">,
    UseControllerProps<FormValues> {
  label?: string;
}

export const ControlledSelect = ({
  name,
  label,
  options,
  control,
  rules,
  shouldUnregister,
  ...selectProps
}: any) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules, shouldUnregister });
  return (
    <FormControl textColor={"gray.900"}>
      {label && (
        <FormLabel textColor="white" htmlFor={name}>
          {label}
        </FormLabel>
      )}
      <Select
        {...(selectProps as any)}
        {...(field as any)}
        options={options}
        id={name}
        isInvalid={!!error}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
