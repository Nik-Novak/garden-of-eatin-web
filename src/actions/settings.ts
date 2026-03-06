import { DeviceSettings } from "@prisma/client";
import { createOrFindDevice, auth } from "./device";
import { database } from "@/prisma/database";

export async function getRemoteSettings(uuid:string){
  const session = await auth();
  if(session){ //prioritize user level settings first
    let {settings} = await database.user.findById(session.user.id);
    if(settings)
      return settings;
  }
  //fallback to client-level settings
  let client = await createOrFindDevice(uuid);
  return client.settings
}

export async function updateRemoteSettings(uuid:string, update:Partial<DeviceSettings>){
  const session = await auth();
  if(session){ //prioritize user-level settings first
    let {settings} = await database.user.update({where:{id: session.user.id}, data:{
      settings:{
        upsert:{
          set: update,
          update
        }
      }
    }});
    return settings;
  }
  //then fallback to client level settings
  let client = await createOrFindDevice(uuid);
  let {settings} = await database.device.update({where:{id: client.id}, data:{
    settings:{
      update
    }
  }});
  return settings;
}