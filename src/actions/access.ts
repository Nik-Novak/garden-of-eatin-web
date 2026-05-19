"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function canViewAdminMeals(){
  //@ts-ignore
  return (await auth.api.userHasPermission({
    headers: await headers(),
    body:{
      permissions: {admin_meals:['view']}
    }
  })).success;
}

export async function canViewAdminDevices(){
  //@ts-ignore
  return (await auth.api.userHasPermission({
    headers: await headers(),
    body:{
      permissions: {admin_devices:['view']}
    }
  })).success;
}