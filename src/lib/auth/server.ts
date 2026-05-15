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
import { expo } from "@better-auth/expo";

if(!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET)
  throw Error("SignIn Provider Google requires GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET");
if(!process.env.APPLE_CLIENT_ID || !process.env.APPLE_TEAM_ID || !process.env.APPLE_KEY_ID || !process.env.APPLE_PRIVATE_KEY)
  throw Error("SignIn Provider Apple requires APPLE_CLIENT_ID APPLE_TEAM_ID APPLE_KEY_ID and APPLE_PRIVATE_KEY");
const useSecureCookies = process.env.NODE_ENV === 'development' ? false : true
console.log('useSecureCookies:', useSecureCookies);


export const auth = betterAuth({
    database: prismaAdapter(database, {
        provider: "mongodb",
    }),
    advanced:{
        database:{generateId:()=>new ObjectId().toHexString()},
        cookies: {
            state: {
                attributes: {
                    sameSite: "lax",
                    secure: useSecureCookies,
                }
            }
        },
        useSecureCookies,
    },
    baseURL: process.env.BETTER_AUTH_URL,
    trustedOrigins: [
        "https://appleid.apple.com",
        "gardenofeatin://", 
        // Add Expo's dev scheme for local development
        ...(process.env.NODE_ENV === "development" ? ["exp://", "exp://**"] : [])
    ],
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
        sendMagicLink: async ({ email, token, url, metadata }, request) => {
          let finalUrl = url;

          // DYNAMIC HOST SWAP: Replaces 'localhost' with your machine's actual IP
          // This allows the phone's browser to reach your Next.js server in dev mode.
          if (request?.headers && process.env.NODE_ENV === "development") {
              const host = request.headers.get("host"); // e.g., 192.168.1.10:3000
              if (host && finalUrl.includes("localhost")) {
                  const urlObj = new URL(finalUrl);
                  urlObj.host = host;
                  finalUrl = urlObj.toString();
              }
          }

          // console.log('CONTExT', JSON.stringify(request?.context, null, 2));
          // console.log('HEADERS', JSON.stringify(request?.headers, null, 2));
          console.log('AUTH: Sending Sign In Link...');
          
          let title = `Sign in`;
          let subject = `${title}: ${constants.appName}: `;
          let templateProps: SignInTemplateProps = {
          appName: constants.appName,
          title,
          url: finalUrl // Use the dynamically modified URL here
          }
          
          let template = React.createElement(SignInTemplate, templateProps);
          await send(email, { subject, template });
          
          console.log('AUTH: done');
          console.log(`Magic link sent to ${email}: ${finalUrl}`);
        },
      }),
      admin({ac, roles, defaultRole }),
      expo(),
      nextCookies() //MUST BE LAST PLUGIN
    ],
    
    //DEBUG
    // logger: {
    //     level: "debug", // Options: "debug", "info", "warn", "error"
    //     log: (level, message, ...args) => {
    //         console.log(`[BetterAuth][${level}] ${message}`, ...args);
    //     },
    // },
});