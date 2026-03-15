import { database } from "@/prisma/database";
import { InteractionType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

type RouteContext = { params: Promise<{ id: string }> };

const BodySchema = z.object({
  interaction_type: z.enum(InteractionType, {
    error: (issue) => 
      issue.input === undefined 
        ? "interaction_type is required." 
        : "Invalid search type provided.",
  }),

  user_lat: z.coerce.number({
    error: (issue) => 
      issue.input === undefined 
        ? "user_lat is required." 
        : "user_lat must be a valid number.",
  }),
    
  user_lng: z.coerce.number({
    error: (issue) => 
      issue.input === undefined 
        ? "user_lng is required." 
        : "user_lng must be a valid number.",
  }),

  device_id: z.string({
    error: (issue) => 
      issue.input === undefined 
        ? "user_lng is required." 
        : "user_lng must be a valid string.",
  })
});

export async function POST(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;
  const body = await request.json();
  const validation = z.safeParse(BodySchema, body);
  if (!validation.success) {
    return NextResponse.json(
      { 
        error: "Invalid or missing parameters", 
        details: z.treeifyError(validation.error) 
      },
      { status: 400 }
    );
  }
  const { interaction_type, user_lng, user_lat, device_id } = validation.data;
  
  let mealInteraction = await database.mealInteraction.create({data:{
    meal_id: id,
    interaction_type,
    user_location:{type:'Point', coordinates: [user_lng, user_lat]},
    device_id
  }});
  
  return NextResponse.json(mealInteraction, {status:200});
}