import type { TextFieldProps, CheckboxProps, MenuItemProps, SelectProps, ButtonProps } from "@mui/material";
import type React from "react";
import type { ReactNode } from "react";
export type FormTextInput = {
  type: 'text',
  name:string,
  required?:boolean,
  label?: string,
  placeholder?: string,
  fullWidth?:boolean,
  multiline?:boolean,
  inputProps?:TextFieldProps,
  defaultValue?:string,
}
export type FormCheckInput = {
  type: 'check',
  name:string,
  required?:boolean,
  label?: string|ReactNode,
  inputProps?:CheckboxProps,
  defaultValue?:boolean,
}

export type FormSelectOption = { label:string, value:string, itemProps?:MenuItemProps };
export type FormSelectInput = Omit<FormTextInput, 'type'|'multiline'|'inputProps'> & {
  type: 'select'
  // name: string,
  // required?:boolean,
  // label?:string,
  // placeholder?:string,
  // fullWidth?:boolean,
  inputProps?:SelectProps,
  // defaultValue?:string,
  options:FormSelectOption[],
}


export type FormCustomInput = {
  type: 'custom',
  component: ReactNode
}

export type FormSubmitInput = {
  type: 'submit'
  name?:string,
  label?:string,
  inputProps?:ButtonProps
}

export type FormInput = FormTextInput | FormCheckInput | FormSelectInput | FormCustomInput | FormSubmitInput;