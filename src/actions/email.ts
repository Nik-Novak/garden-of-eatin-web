"use server";
import { createTransport } from 'nodemailer';
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { render } from '@react-email/components';

// console.log('HERE');
// console.log(process.env);
if(!process.env.EMAIL_HOST || !process.env.EMAIL_PORT || !process.env.EMAIL_USER || !process.env.EMAIL_PASS)
  throw Error("Must provide ALL Email env" + "\n" + JSON.stringify(process.env));
const transportOptions:SMTPTransport['options'] = {
  host: process.env.EMAIL_HOST!,
  port: parseInt(process.env.EMAIL_PORT!),
  auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS // your password
  } 
}
const mailer = createTransport(transportOptions);
// type EmailTemplateOptions = {
//   name:string,
//   values?:Record<string, any>
// }
type EmailContentOptions = { //html content
  html: string,
  text?:undefined
  template?: undefined
} | { //text content
  html?: undefined
  text:string
  template?: undefined
} | {
  template: React.ReactElement
}
type EmailSendOptions = EmailContentOptions & {
  from?:string
  subject: string,
};

export async function send(recipients:string[]|string, options:EmailSendOptions){
  console.log(options.template);
  let templateContent:string|undefined = options.template ? await render(options.template) : undefined;
  
  await mailer.sendMail({
    html: templateContent ? templateContent : undefined,
    ...options,
    from: options.from || process.env.EMAIL_FROM,
    to: recipients
  });
}

export async function sendAdmin(options:EmailSendOptions){
  let adminEmails = process.env.ADMIN_EMAILS?.split(';');
  if(!adminEmails?.length)
    throw Error("ADMIN_EMAILS must be defined, and should be separated by ';'");
  return send(adminEmails, options);
}