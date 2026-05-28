"use server";

import constants from "@/constants";
import { database } from "@/prisma/database";
import { flattenObject } from "@/utils/fns/general";
import DataTableTemplate, { DataTableTemplateProps } from "@/utils/templates/email/DataTableTemplate";
import React from "react";
import { sendAdmin } from "./email";

export async function createAccountDeletionRequest(email:string, reason?:string, feedback?:string){
  let data = await database.accountDeletionRequest.create({data:{
    email,
    reason,
    feedback
  }});
  if(process.env.NODE_ENV === 'production'){
    console.log('AccountDeletionRequest: Sending new contact request notification...');
    let title = `New AccountDeletionRequest Submitted`;
    let subject = `${constants.appName}: ${title}`;
    let templateProps: DataTableTemplateProps = {
      appName: constants.appName,
      title,
      data: flattenObject({...data, env:process.env.NODE_ENV}, true)
    };
    let template = React.createElement(DataTableTemplate, templateProps);
    await sendAdmin({subject, template});
    console.log('AccountDeletionRequest: done');
  }
}