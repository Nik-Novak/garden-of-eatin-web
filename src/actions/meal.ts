// src/actions/meal.ts
"use server";

import crypto from "crypto";
import { database } from "@/prisma/database";
import cronGenerateOccurences from "@/prisma/migrations/cron-generate-occurrences";

// --- INTERNAL HELPERS ---

// Securely validates the HMAC signature before touching the database
function verifyTokenIntegrity(providedToken: string, mealId: string, secret: string): boolean {
  const parts = providedToken.split('.');
  if (parts.length !== 2) return false;
  
  const [rawString, providedSignature] = parts;
  
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(`meal-${mealId}-${rawString}`)
    .digest('hex');
    
  const expectedBuffer = Buffer.from(expectedSignature);
  const providedBuffer = Buffer.from(providedSignature);
  
  if (expectedBuffer.length !== providedBuffer.length) return false;
  return crypto.timingSafeEqual(expectedBuffer, providedBuffer);
}

// Reusable function to handle all token security checks
async function validateMealToken(mealId: string, token: string) {
  const cronSecret = process.env.CRON_SECRET;

  if (!token || !cronSecret) {
    throw Error("Missing token or server configuration");
  }

  // 1. Cryptographic Verification
  const isValidSignature = verifyTokenIntegrity(token, mealId, cronSecret);
  if (!isValidSignature) {
    throw Error("Invalid or malformed token signature");
  }

  // 2. Database Verification
  const dbToken = await database.verificationToken.findUnique({
    where: {
      identifier_token: { 
        identifier: `meal-${mealId}`,
        token: token
      }
    }
  });

  if (!dbToken) {
    throw Error("Token not found or already used");
  }

  if (dbToken.expires < new Date()) {
    throw Error("Token has expired");
  }

  return { dbToken };
}

// --- SERVER ACTIONS ---

export async function rejectMeal(mealId: string, token: string, reason: string) {
  if (!reason || reason.trim() === "") {
    throw Error("A rejection reason is required.");
  }

  const {dbToken} = await validateMealToken(mealId, token);

  // 3. Update the Meal and Invalidate the Token securely
  const [updatedMeal, deletedToken] = await database.$transaction([
    database.meal.update({
      where: { id: mealId },
      data: {
        approved: false, 
        rejection_reason: reason
      }
    }),
    database.verificationToken.delete({
      where: { id: dbToken!.id }
    })
  ]);

  return updatedMeal;
}

export async function approveMeal(mealId: string, token: string) {
  const {dbToken} = await validateMealToken(mealId, token);

  // 3. Update the Meal and Invalidate the Token securely
  const [updatedMeal, deletedToken] = await database.$transaction([
    database.meal.update({
      where: { id: mealId },
      data: {
        approved: true,
        rejection_reason: null // Clear out any previous rejection reason just in case
      }
    }),
    database.verificationToken.delete({
      where: { id: dbToken!.id }
    })
  ]);

  console.log('Generating occurrences...');
  await cronGenerateOccurences();
  console.log('Done: Generating occurrences.')

  return updatedMeal;
}