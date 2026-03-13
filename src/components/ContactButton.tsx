"use client";
import { Button, ButtonProps } from "@mui/material";
import { PropsWithChildren, useState } from "react";
import { useNotificationQueue } from "./NotificationQueue";
import Notification from "./Notification";
import InputDialog from "./InputDialog";
import { createContactRequest } from "@/actions/contact";
import { getDeviceUUID } from "@/utils/fns/uuid";

export default function ContactButton(props:ButtonProps){
  const [open, setOpen] = useState(false);
  const { pushNotification } = useNotificationQueue();
  return (
    <>
      <Button aria-label={props.children?.toString()} aria-haspopup="dialog" {...props} onClick={()=>setOpen(true)} />
      <InputDialog 
        open={open} 
        title={"Start Chat"}
        text={"This will go straight to our phones and our Founders will answer your questions directly. We care a lot and value your opinions."}
        inputs={[
          {
            type: 'text',
            name: 'name',
            required:true,
            fullWidth:true,
            label: "First and Last name",
            placeholder:'Jon Smith'
          },
          {
            type: 'text',
            name: 'email',
            required:true,
            fullWidth:true,
            label: "Email",
            placeholder:'jon.smith@seznam.cz'
          },
          {
            type: 'text',
            name: 'phone',
            required:false,
            fullWidth:true,
            label: "Phone",
            placeholder:'Jon Smith'
          },
          {
            type: 'text',
            name: 'message',
            required:true,
            fullWidth:true,
            label: "Message",
            multiline: true,
            inputProps:{minRows:3},
            placeholder:'I would like to...'
          },
        ]}
        submitText={"Start Chat"}
        onClose={()=>setOpen(false)}
        onSubmit={(formData)=>{
          return createContactRequest(formData.get('name')!.toString(), formData.get('phone')!.toString(), formData.get('email')!.toString(), getDeviceUUID())
        }}
        onComplete={()=>{
          setOpen(false);
          pushNotification(<Notification>Chat started. We'll be in touch in the next few minutes.</Notification>)
        }}
      />
    </>
  );
}