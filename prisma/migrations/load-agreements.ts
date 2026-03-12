
import { database } from "../database/database";
import { Prisma } from "@prisma/client";

export default async function preloadDatabase(){
  let effective_date = new Date('03/10/2026')
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

  let terms = await database.agreement.createOrFind({data:{
    agreement_type: "terms_of_service",
    effective_date,
    content_md: `# Terms of Service for Garden of Eatin'

**Effective Date:** ${effective_date.toLocaleDateString()}

Welcome to Garden of Eatin' ("we," "us," or "our"). By downloading, accessing, or using the Garden of Eatin' mobile application ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.

## 1. Our Service: A Discovery Platform
Garden of Eatin' is a platform designed to make free community meals discoverable. **We do not organize, host, endorse, or manage any of the meals or events listed in the App.** We act solely as an informational directory. 

## 2. User-Submitted Content and Verification
Users may submit information about local community meals. While we review and verify submissions before they appear on the public feed to prevent spam, this verification is strictly for basic content moderation. 
* We do not guarantee the accuracy, safety, quality, or existence of any meal or event listed.
* You are solely responsible for the information you submit.
* We reserve the right to reject, modify, or remove any submission at our sole discretion, without notice.

## 3. Assumption of Risk and Release of Liability
By using the App to discover and attend community meals, you acknowledge that interacting with strangers and attending public or private events carries inherent risks. 
* **You assume all risks** associated with attending any event found through the App.
* You agree that Garden of Eatin' and its developers are **not responsible or liable** for any injury, illness, loss, property damage, dispute, or other incident that occurs before, during, or after an event discovered through our services. 
* To the fullest extent permitted by law, you release us from any and all claims, demands, and damages arising out of or in any way connected with your attendance at these events.

## 4. Acceptable Use
While using the App, you agree not to:
* Submit false, misleading, or malicious information about an event.
* Use the App for any illegal or unauthorized purpose.
* Attempt to interfere with the App's proper functioning, including its reliance on device IDs for user identification.
* Scrape, extract, or mine data from the App.

## 5. Disclaimer of Warranties
The App is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, either express or implied, regarding the App's reliability, accuracy, or availability. We do not guarantee that the App will be free of bugs, crashes, or interruptions.

## 6. Limitation of Liability
In no event shall Garden of Eatin' be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of your use of the App, even if we have been advised of the possibility of such damages.

## 7. Governing Law
These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.

## 8. Responsibility for Shared Devices and Third-Party Use
Because this App does not utilize individualized user accounts or passwords, your acceptance of these terms is tied directly to the device you are using. If you permit another individual to access or use the App on your device, you acknowledge and agree that you assume full responsibility for their actions, data submissions, and any real-world risks they undertake. Garden of Eatin' explicitly disclaims any and all responsibility or liability for any injuries, damages, illnesses, or claims arising from the use of the App by anyone accessing it through your device. By initially accepting these terms, you certify that you accept full liability and assumption of risk on behalf of any subsequent user of your device.

## 9. Changes to These Terms
We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the "Effective Date" at the top of this document. Your continued use of the App after such changes constitutes your acceptance of the new Terms.

## 10. Contact Us
If you have any questions about these Terms, please contact us at:
* **Email:** [contact@gardenofeatin.io](mailto:contact@gardenofeatin.io)
* **Website:** [gardenofeatin.io](https://gardenofeatin.io)`
  }}, {where:{agreement_type:"terms_of_service", effective_date}});
  console.log(terms.created ? 'Created' : 'Found existing', 'Terms of Service with id:', terms.document.id);

  let release = await database.agreement.createOrFind({data:{
    agreement_type: "release_of_liability",
    effective_date,
    content_md: `# Release of Liability and Assumption of Risk Agreement

**Effective Date:** ${effective_date.toLocaleDateString()}

This Release of Liability and Assumption of Risk Agreement ("Agreement") is a legally binding contract between you ("User" or "Participant") and Garden of Eatin', its owners, developers, affiliates, acting agents, representatives, and volunteers (collectively, "Releasees"). 

By downloading, accessing, or using the Garden of Eatin' mobile application ("the App") to discover, attend, or submit community meals, you explicitly agree to the terms set forth below.

## 1. Acknowledgment and Assumption of Risk
You acknowledge that Garden of Eatin' functions solely as a digital discovery platform. We do not prepare, serve, inspect, or manage the food, nor do we host, secure, or organize the events listed within the App. 

You understand and acknowledge that attending community meals involves inherent risks, including but not limited to:
* **Food Safety Risks:** Exposure to food allergens, foodborne illnesses, spoilage, or improperly prepared/handled food.
* **Personal Safety Risks:** Interactions with strangers, unpredictable behavior of other attendees, and risks associated with traveling to and from event locations.
* **Premises Liability:** Hazards present at the public or private venues where these meals are hosted.

**You voluntarily, knowingly, and freely assume all such risks**, both known and unknown, even if arising from the negligence of the Releasees or others, and assume full responsibility for your participation.

## 2. Explicit Waiver and Release of Liability
To the fullest extent permitted by law, you explicitly and unconditionally release, waive, discharge, and covenant not to sue Garden of Eatin' or its acting agents from any and all liability, claims, demands, actions, or causes of action arising out of or related to any loss, damage, injury (including illness or death), or property damage that may be sustained by you, whether caused by the negligence of the Releasees or otherwise, while participating in any activity, event, or meal discovered through the App.

## 3. Indemnification
You agree to indemnify, defend, and hold harmless the Releasees from any and all costs, expenses (including attorney’s fees), claims, liabilities, or judgments arising out of your attendance at a community meal, your interactions with other users, or the information you submit to the App.

## 4. No Medical or Emergency Support
You understand that Garden of Eatin' does not provide medical, health, or emergency personnel at any of the listed events. In the event of an allergic reaction, illness, or injury, you are solely responsible for seeking appropriate medical care.

## 5. Severability and Governing Law
If any provision of this Agreement is found to be overly broad, invalid, or unenforceable, that provision shall be severed, and the remaining provisions will continue in full legal force and effect. This Agreement shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.

## 6. Responsibility for Shared Devices and Third-Party Use
Because this App does not utilize individualized user accounts or passwords, your acceptance of these terms is tied directly to the device you are using. If you permit another individual to access or use the App on your device, you acknowledge and agree that you assume full responsibility for their actions, data submissions, and any real-world risks they undertake. Garden of Eatin' explicitly disclaims any and all responsibility or liability for any injuries, damages, illnesses, or claims arising from the use of the App by anyone accessing it through your device. By initially accepting these terms, you certify that you accept full liability and assumption of risk on behalf of any subsequent user of your device.

## 7. Acknowledgment of Understanding
By using the Garden of Eatin' App, you acknowledge that you have read this Release of Liability and Assumption of Risk Agreement, fully understand its terms, and understand that you are giving up substantial rights, including your right to sue. You acknowledge that you are agreeing to this Agreement freely and voluntarily.

---
*If you do not agree to these terms, you must immediately cease using the Garden of Eatin' application.*`
  }}, {where:{agreement_type:"release_of_liability"}});
  console.log(release.created ? 'Created' : 'Found existing', 'Release of Liability with id:', release.document.id);
}