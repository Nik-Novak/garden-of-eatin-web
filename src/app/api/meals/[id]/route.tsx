import { Prisma } from "@prisma/client";
import { database } from "@/prisma/database";
import { NextRequest } from "next/server";

// Define the expected params structure
type RouteContext = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;
  console.log(`${request.method} meals @ id=${id}`);

  if (!id) {
    return Response.json({ error: "Missing ID" }, { status: 400 });
  }

  const data = await database.meal.findUnique({
    where: { id },
  });

  if (!data) {
    return Response.json({ error: `id ${id} not found` }, { status: 404 });
  }

  return Response.json(data, { status: 200 });
}

export async function PATCH(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;
  const update = (await request.json()) as Prisma.MealUpdateInput;
  console.log(`${request.method} meals @ id=${id}, update=${JSON.stringify(update, null, 2)}`);
  
  let updatedMeal = await database.meal.updateById(id, {data:update});
  
  return Response.json(updatedMeal);
}