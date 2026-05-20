import { database } from "../database/database";

export default async function addContributors() {
  console.log("Changing all QR URLs");

  // Optional: Clear existing contributors so you don't get duplicates when testing

  const qr_codes = await database.qRCode.updateMany({data:{action: 
    {
      "type": "URL_REDIRECT",
      "label": "Download Garden of Eatin",
      "payload": {
        "url": "https://gardenofeatin.io/download"
      }
    }
  }});

  console.log(`Successfully updated ${qr_codes.count} qr codes.`);
}