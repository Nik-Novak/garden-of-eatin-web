import { createOrFindDevice } from "@/actions/device";
import { sendAdmin } from "@/actions/email";
import constants from "@/constants";
import { database } from "@/prisma/database";
import { MealCreatePayload } from "@/types/meal";
import NewMealTemplate, { NewMealTemplateProps } from "@/utils/templates/email/NewMealTemplate";
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import spacetime from "spacetime";
import crypto from "crypto"; // <-- Added for secure token derivation
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const data = await database.meal.findMany();
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  let requestBody = await request.json() as MealCreatePayload;
  if (!requestBody.device_uuid) throw Error('Device Identifier required to submit meal');
  
  let device = await createOrFindDevice(requestBody.device_uuid);
  let data = await database.meal.validate({ ...requestBody.meal, submitter_id: device.id });
  let meal = await database.meal.create({ data });
  
  try {
    let frontendWeb = process.env.AUTH_URL;
    let cronSecret = process.env.CRON_SECRET;

    // Moved this check up so we guarantee cronSecret exists before deriving the token
    if (!frontendWeb || !cronSecret) {
      throw Error("Must define AUTH_URL and CRON_SECRET, or else generate-occurrences will have to wait until next cron window");
    }

    // 1. Generate a random string
    const rawString = uuidv4();

    // 2. Hash it with your CRON_SECRET
    const signature = crypto
      .createHmac('sha256', cronSecret)
      .update(`meal-${meal.id}-${rawString}`)
      .digest('hex');

    // 3. Combine them so the verifier has the raw data to check against
    const verifiableToken = `${rawString}.${signature}`;

    const verificationToken = await database.verificationToken.create({
      data: {
        expires: spacetime().add(24, 'hours').toNativeDate(),
        identifier: `meal-${meal.id}`,
        token: verifiableToken, 
      }
    });
    
    // if(process.env.NODE_ENV === 'production'){
      console.log('MEAL: Sending new meal notification...');
      let title = `New Meal Created!`;
      let subject = `${constants.appName}: ${title}`;
      let templateProps: NewMealTemplateProps = {
        appName: constants.appName,
        title,
        meal,
        frontendWeb,
        token: verificationToken.token
      }
      let template = React.createElement(NewMealTemplate, templateProps);
      await sendAdmin({ subject, template });
      console.log('MEAL: done');
    // }
  } catch (err) {
    console.error('SOMETHING WENT WRONG generating occurrences:');
    console.error(err);
  }
  
  return NextResponse.json(meal);
}
