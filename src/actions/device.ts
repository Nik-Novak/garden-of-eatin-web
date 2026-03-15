"use server";
import constants from "@/constants";
import React from "react";
import DataTableTemplate, { DataTableTemplateProps } from "@/utils/templates/email/DataTableTemplate";
import { flattenObject } from "@/utils/fns/general";
import type { Device, DeviceHardware, Prisma } from "@prisma/client";
import { database } from "@/prisma/database";
import { sendAdmin } from "./email";
import _ from "lodash";

// PLACEHOLDERS
export const auth:()=>Promise<Session|null> = async ()=>null;
interface Session {
  user: {
    id: string;
    email?: string;
    image?: string;
    name?: string;
    // project_ids: string[];
  },
  error?: "RefreshAccessTokenError"
  // Add other extra fields as needed
}

const updateDeviceHardware = async (device:Device, hardware:DeviceHardware|undefined)=>{
  if(!_.isEqual(device.hardware ?? null, hardware ?? null)){
    console.log('DEVICE: Found new device hardware, updating...');
    await database.device.updateById(device.id,{data:{hardware}});
    console.log('done updating.')
  }
}

export async function createOrFindDevice<
  T extends Prisma.DeviceInclude | undefined = undefined
>(
  uuid: string,
  include?: T,
  hardware?: DeviceHardware
): Promise<T extends Prisma.DeviceInclude ? Prisma.DeviceGetPayload<{ include: T }> : Device> {
  let session = await auth(); //await auth();
  let client = await database.device.findFirst({where:{
    uuid,
    user_id: session?.user.id
  }, include }) as T extends undefined ? Device | null : Prisma.DeviceGetPayload<{ include: T }> | null;
  if(!client){
    let clientWithoutUser = await database.device.findFirst({where:{uuid}, include}) as T extends undefined ? Device | null : Prisma.DeviceGetPayload<{ include: T }> | null; //secure way to check for existing client and copy settings over
    if(clientWithoutUser){
      if(session?.user.id){ //synchronize client with user if signed in
        await database.user.updateById(session.user.id, {data:{
          settings: {
            ...clientWithoutUser.settings,
            // credits: clientWithoutUser.settings.credits + 100, //signin bonus
            // credit_limit: clientWithoutUser.settings.credit_limit + 100 //signin bonus
          },
        }});
        console.log('DEVICE: Device was not tied to current user. Updating device record.');
        return await database.device.updateById(clientWithoutUser.id, {data:{
          user_id: session.user.id,
          hardware
          // settings:{
          //   update:{
          //     credits:0 //drain credits to prevent dupes
          //   }
          // }
        }, include}) as any;
      } //end sync
      console.log('DEVICE: Device was not tied to current user, but no valid user_id was found.');
      await updateDeviceHardware(clientWithoutUser, hardware);
      return clientWithoutUser as any; //otherwise return raw client
    }
    else{
      console.log('DEVICE: No device record found. Creating a new one...');
      let newClient = await database.device.create({data:{
        uuid,
        user_id: session?.user.id,
        settings: {},
        hardware
      }, include});
      console.log('DEVICE: done');
      
      if(process.env.NODE_ENV === 'production'){
        console.log('DEVICE: Sending new device notification...');
        let title = `New Device has Visited the App!`;
        let subject = `${constants.appName}: ${title}`;
        let templateProps: DataTableTemplateProps = {
          appName: constants.appName,
          title,
          data: flattenObject(newClient, true)
        }
        let template = React.createElement(DataTableTemplate, templateProps);
        await sendAdmin({subject, template});
        console.log('DEVICE: done');
      }
      
      return newClient as any;
    }
  }
  console.log('DEVICE: Returning device with id:', client.id);
  await updateDeviceHardware(client, hardware);
  return client as any;
} 

export async function getAccount(){
  const session = await auth(); //auth();
  if(!session) return undefined;
  return database.account.findFirst({where:{userId: session.user.id}});
}