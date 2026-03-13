"use client";
import {v7 as uuidv7} from 'uuid';

export function getDeviceUUID(){
  let uuid = localStorage.getItem("web_deviceid");
  if (uuid) return uuid;
  uuid = uuidv7() as string;
  localStorage.setItem("web_deviceid", uuid);
  return uuid;
}
