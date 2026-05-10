import { betterAuth } from "better-auth/minimal";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { database } from "@/prisma/database";
import { admin, magicLink } from "better-auth/plugins";
import constants from "@/constants";
import SignInTemplate, { SignInTemplateProps } from "@/utils/templates/email/SignInTemplate";
import React from "react";
import { send } from "@/actions/email";
import { nextCookies } from "better-auth/next-js";
import ObjectId from 'bson-objectid';
import { generateAppleClientSecret } from "./utils";
import { ac, defaultRole, roles } from "./access";

if(!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET)
  throw Error("SignIn Provider Google requires GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET");
if(!process.env.APPLE_CLIENT_ID || !process.env.APPLE_TEAM_ID || !process.env.APPLE_KEY_ID || !process.env.APPLE_PRIVATE_KEY)
  throw Error("SignIn Provider Apple requires APPLE_CLIENT_ID APPLE_TEAM_ID APPLE_KEY_ID and APPLE_PRIVATE_KEY");

export const auth = betterAuth({
    database: prismaAdapter(database, {
        provider: "mongodb",
    }),
    advanced:{
        database:{generateId:()=>new ObjectId().toHexString()},
        cookies: {
            state: {
                attributes: {
                    sameSite: "lax", // Required for cross-site callbacks
                    secure: true,
                }
            }
        }
    },
    baseURL: process.env.BETTER_AUTH_URL,
    trustedOrigins: ["https://appleid.apple.com"],
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
        apple: { 
            clientId: process.env.APPLE_CLIENT_ID, 
            clientSecret: await generateAppleClientSecret(
                process.env.APPLE_CLIENT_ID, 
                process.env.APPLE_TEAM_ID, 
                process.env.APPLE_KEY_ID, 
                process.env.APPLE_PRIVATE_KEY, 
            ), 
            // Optional
            appBundleIdentifier: process.env.APPLE_APP_BUNDLE_IDENTIFIER, 
        }, 
    },
    plugins: [
      magicLink({
          sendMagicLink: async ({ email, token, url }, request) => {
              // Implement your email sending logic here (e.g., Nodemailer, Postmark, etc.)
              console.log('AUTH: Sending Sign In Link...');
              let title = `Sign in`;
              let subject = `${title}: ${constants.appName}: `;
              let templateProps: SignInTemplateProps = {
                appName: constants.appName,
                title,
                url
              }
              let template = React.createElement(SignInTemplate, templateProps);
              await send(email, { subject, template });
              console.log('AUTH: done');
              console.log(`Magic link sent to ${email}: ${url}`);
          },
      }),
      admin({ac, roles, defaultRole }),
      nextCookies() //MUST BE LAST PLUGIN
    ],
});