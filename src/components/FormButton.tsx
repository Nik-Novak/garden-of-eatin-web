"use client";
import { Button, ButtonProps } from "@mui/material";
import { useFormStatus } from "react-dom";
import { FormInput } from "@/types/form";

type Props = ButtonProps & {
  inputs?: FormInput[]
  // disableOnSubmit?:boolean;
}

export default function FormButton(props:Props){
  const {pending,data} = useFormStatus();
  let {children, loading, ...propsWOChildren} = props;
  return <Button type="submit" loading={pending || loading} {...propsWOChildren}>{children}</Button>
}