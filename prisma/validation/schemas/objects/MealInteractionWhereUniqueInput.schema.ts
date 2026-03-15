import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const MealInteractionWhereUniqueInputObjectSchema: z.ZodType<Prisma.MealInteractionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionWhereUniqueInput>;
export const MealInteractionWhereUniqueInputObjectZodSchema = makeSchema();
