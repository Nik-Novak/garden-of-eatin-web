
import { database } from "../database/database";
import { Prisma } from "@prisma/client";

export default async function addNotice(){
  const notice = await database.notice.create({data:{
    level: 'Warning',
    content_md: `### ⚠️ Temporary Service Disruptions

As we launch the app, we've introduced **major underlying changes** to support long-term updates while still allowing older versions to function.

Because of this, you may experience:
- App instability or features not working as expected
- Occasional errors or failed searches
- Slower performance in certain areas

**🛠️ Timeline**
These issues are expected to be resolved after **Thursday, March 19th**.

If you've run into any problems recently, these updates are **likely the cause**.

---

We truly appreciate your patience as we improve the platform 💛  
Thank you for being here with us!`
  }});
  console.log(`Successfully added notice with ID: ${notice.id}`);
}