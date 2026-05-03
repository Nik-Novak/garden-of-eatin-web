"use client";
import {v7 as uuidv7} from 'uuid';

export function getWebDeviceUUID(){
  let uuid = localStorage.getItem("web_device_id");
  if (uuid) return uuid;
  uuid = uuidv7() as string;
  localStorage.setItem("web_device_id", uuid);
  return uuid;
}
