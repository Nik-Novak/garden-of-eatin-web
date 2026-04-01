import api from "@/lib/api";
import { database } from "../database/database";
import { Prisma } from "@prisma/client";

export default async function addContributors() {
  console.log("Seeding contributors...");

  // Optional: Clear existing contributors so you don't get duplicates when testing
  await database.contributor.deleteMany({});

  const contributors = await database.contributor.createMany({
    data: [
      {
        firstName: 'Irene',
        defaultImage: '/img/people/irene-1.png',
        hoverImage: '/img/people/irene-2.png',
        order: 1
      },
      {
        firstName: 'Will',
        defaultImage: '/img/people/will-1.png',
        hoverImage: '/img/people/will-2.png',
        order: 1
      }
    ]
  });

  await api.post(
    '/revalidate', 
    {path:'/'},
    {headers:{Authorization: `Bearer ${process.env.CRON_SECRET}`}}
  );

  console.log(`Successfully added ${contributors.count} contributors.`);
}