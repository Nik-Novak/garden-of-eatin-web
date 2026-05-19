//add-debug-meal.ts
import { database } from "../database/database";

export default async function rmAllScannableDocuments(){
  let r = await database.qRScan.deleteMany({});
  console.log('Successfully deleted', r.count, 'qRScans');
  let p = await database.qRCode.deleteMany({});
  console.log('Successfully deleted', p.count, 'qRCodes');
  let t = await database.scannableDocumentMealHit.deleteMany({});
  console.log('Successfully deleted', t.count, 'scannableDocumentMealHits');
  let q = await database.scannableDocument.deleteMany({});
  console.log('Successfully deleted', q.count, 'scannableDocuments');
}