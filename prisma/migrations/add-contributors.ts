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
        firstName: 'Alice',
        defaultImage: 'https://api.dicebear.com/8.x/notionists/svg?seed=Alice',
        hoverImage: 'https://api.dicebear.com/8.x/notionists/svg?seed=Alice&hand=raised',
        order: 2
      },
      {
        firstName: 'Charlie',
        defaultImage: 'https://api.dicebear.com/8.x/notionists/svg?seed=Charlie',
        hoverImage: 'https://api.dicebear.com/8.x/notionists/svg?seed=Charlie&hand=raised',
        order: 3
      },
      {
        firstName: 'Diana',
        defaultImage: 'https://api.dicebear.com/8.x/notionists/svg?seed=Diana',
        hoverImage: 'https://api.dicebear.com/8.x/notionists/svg?seed=Diana&hand=raised',
        order: 4
      },
      {
        firstName: 'Evan',
        defaultImage: 'https://api.dicebear.com/8.x/notionists/svg?seed=Evan',
        hoverImage: 'https://api.dicebear.com/8.x/notionists/svg?seed=Evan&hand=raised',
        order: 5
      },
      {
        firstName: 'Fiona',
        defaultImage: 'https://api.dicebear.com/8.x/notionists/svg?seed=Fiona',
        hoverImage: 'https://api.dicebear.com/8.x/notionists/svg?seed=Fiona&hand=raised',
        order: 6
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