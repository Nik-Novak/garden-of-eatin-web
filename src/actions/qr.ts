"use server";

import { database } from "@/prisma/database";
import { Prisma } from "@prisma/client";

type RegisterQRScanArgs = {
  qr_code_id: string;
  device_id?: string;
  web_device_id?: string;
  web_device_uuid?: string;
}
export async function registerQRScan({qr_code_id, device_id, web_device_id, web_device_uuid}:RegisterQRScanArgs){
  let qrCode = await database.qRCode.findById(qr_code_id);

  let webDeviceId = web_device_id;
  if(!webDeviceId && web_device_uuid)
    webDeviceId = (await database.webDevice.createOrFind({data:{uuid: web_device_uuid, settings:{}, device_id}}, {where:{uuid:web_device_uuid}})).document.id;
  if(!webDeviceId && !device_id)
    throw Error("Could not instantiate or find a WebDevice or Device. At least one is required to proceed.");
  
  let qrScan = await database.qRScan.create({data:{
    qr_action: qrCode.action as Prisma.QRActionCreateInput,
    device_id,
    web_device_id: webDeviceId,
    qr_code_id,
  }});

  console.log(`Successfully registered QRCode scan for QRCode ${qrCode.id}.\n\tAction: ${JSON.stringify(qrScan.qr_action, null, 2)}.\n\tScan id:${qrScan.id}`);

  return qrScan.qr_action;
}