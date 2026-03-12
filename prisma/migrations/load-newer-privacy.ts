
import { database } from "../database/database";
import { Prisma } from "@prisma/client";

export default async function preloadDatabase(){
  const effective_date = new Date('04/20/2026');
  let privacy = await database.agreement.createOrFind({data:{
    agreement_type: "privacy_policy",
    effective_date,
    content_md: `# Privacy Policy for Garden of Eatin'

**Effective Date:** ${effective_date.toLocaleDateString()}

This Privacy Policy explains how Garden of Eatin' ("we," "us," or "our") collects, uses, and protects your information when you use our mobile application ("the App"). The App's primary purpose is to help you discover and share free community meals in your area.

## 1. Information We Collect
Because we do not require user accounts, we collect information primarily through anonymous identifiers.

* **Precise Location Data:** We request access to your device’s precise GPS location. We collect and store this data to show you nearby meals and to analyze user distribution so we can expand our services to under-resourced areas.
* **Device Identifiers:** We use anonymous device IDs to store your preferences and app data without tying them to your personal identity (such as your name or email).
* **User-Submitted Content:** If you choose to submit a community meal to the App, we collect the text details of that event (e.g., time, location, description). We do not collect or allow image uploads at this time.
* **Usage and Diagnostic Data:** We collect crash reports and analytics data regarding how you interact with the App to help us improve performance and fix bugs.

## 2. How We Use Your Information
We use the collected information for the following purposes:

* To operate the App and display community meals near your specific location.
* To map user density against meal availability, helping us make decisions about where to focus our community outreach and expansion.
* To review and verify user-submitted meals before they appear on the public feed.
* To monitor App stability, troubleshoot crashes, and analyze user engagement.

## 3. Sharing Your Information
We do not sell your personal data. We only share your information with trusted third-party service providers that help us operate the App:

* **Sentry:** Used for crash reporting and monitoring App stability.
* **Vexo:** Used for product analytics to understand how users navigate the App.

These providers are bound by confidentiality agreements and are restricted from using your data for any purpose other than providing these specific services to us.

## 4. User-Submitted Events and Liability
Any community meal details you submit will become publicly visible within the App once verified by our team. Please do not include sensitive personal information in these public descriptions.

*Disclaimer:* Garden of Eatin' provides a discovery platform only. We do not host, organize, or manage the meals listed in the App. While we review submissions before they go live, we do not guarantee the safety, quality, or existence of these events. We take no responsibility for any incidents, injuries, or damages occurring as a result of attending an event found through our services.

## 5. Data Security
We implement industry-standard security measures to protect your data. However, no method of transmission over the internet or electronic storage is entirely secure. We cannot guarantee absolute security of the anonymous data or location information we collect.

## 6. Children's Privacy
The App is intended for a general audience. We do not knowingly collect personal information from children under the age of 13. If you believe a child has provided us with personal information, please contact us, and we will delete it.

## 7. California Privacy Rights
If you are a California resident, the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) grant you specific rights regarding your data:

* **Right to Know:** You can request details about the categories and specific pieces of personal information we have collected about you.
* **Right to Delete:** You can request that we delete the personal data we have collected from you.
* **Right to Opt-Out:** We do not sell or share your personal information for targeted advertising, so there is no need to opt-out.
* **Right to Non-Discrimination:** We will not discriminate against you for exercising your privacy rights.

To exercise your rights, please contact us using the information below. Because we do not maintain traditional user accounts, you will need to provide your device ID so we can locate your anonymous data.

## 8. Responsibility for Shared Devices and Third-Party Use
Because this App does not utilize individualized user accounts or passwords, your acceptance of these terms is tied directly to the device you are using. If you permit another individual to access or use the App on your device, you acknowledge and agree that you assume full responsibility for their actions, data submissions, and any real-world risks they undertake. Garden of Eatin' explicitly disclaims any and all responsibility or liability for any injuries, damages, illnesses, or claims arising from the use of the App by anyone accessing it through your device. By initially accepting these terms, you certify that you accept full liability and assumption of risk on behalf of any subsequent user of your device.

## 9. Changes to This Privacy Policy
We reserve the right to modify this Privacy Policy at any time. We will provide notice of significant changes by updating the "Effective Date" at the top of this document. Your continued use of the App after such changes constitutes your acceptance of the new Privacy Policy.

## 10. Contact Us
If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at:

* **Email:** [contact@gardenofeatin.io](mailto:contact@gardenofeatin.io)
* **Website:** [gardenofeatin.io](https://gardenofeatin.io)`
  }}, {where:{agreement_type:"privacy_policy", effective_date}});
  console.log(privacy.created ? 'Created' : 'Found existing', 'Privacy Policy with id:', privacy.document.id);
}