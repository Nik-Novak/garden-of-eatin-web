"use server";

import constants from "@/constants";
import { flattenObject } from "@/utils/fns/general";
import DataTableTemplate, { DataTableTemplateProps } from "@/utils/templates/email/DataTableTemplate";
import React from "react";
import { sendAdmin } from "./email";
import { database } from "@/prisma/database";

export async function createContactRequest(name:string, phone:string, email:string, uuid:string){
  // const session = await auth();
  // const client = await createOrFindDevice(uuid);
  const data = {
    name, phone, email,
    // device_id: client.id
    // project_id: client.settings.selected_project_id || undefined
  };
  await database.contactRequest.create({ data });

  if(process.env.NODE_ENV === 'production'){
    console.log('ContactRequest: Sending new contact request notification...');
    let title = `New ContactRequest Submitted`;
    let subject = `${constants.appName}: ${title}`;
    let templateProps: DataTableTemplateProps = {
      appName: constants.appName,
      title,
      data: flattenObject({...data, env:process.env.NODE_ENV}, true)
    };
    let template = React.createElement(DataTableTemplate, templateProps);
    await sendAdmin({subject, template});
    console.log('FORM: done');
  }
}

export async function submitForm(formData:FormData){
  let formObj:{[key:string]:FormDataEntryValue} = {};
  Array.from(formData.entries()).forEach(([name, value])=>{
    formObj[name] = value;
  });
  if(process.env.NODE_ENV === 'production'){
    console.log('FORM: Sending new form submit notification...');
    let title = `New Form Submitted`;
    let subject = `${constants.appName}: ${title}`;
    let templateProps: DataTableTemplateProps = {
      appName: constants.appName,
      title,
      data: flattenObject({...formObj, env:process.env.NODE_ENV}, true)
    }
    let template = React.createElement(DataTableTemplate, templateProps);
    await sendAdmin({subject, template});
    console.log('FORM: done');
  }
}