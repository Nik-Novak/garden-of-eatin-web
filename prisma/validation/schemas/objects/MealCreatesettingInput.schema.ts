import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingSchema } from '../enums/Setting.schema'

const makeSchema = () => z.object({
  set: SettingSchema.array()
}).strict();
export const MealCreatesettingInputObjectSchema: z.ZodType<Prisma.MealCreatesettingInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreatesettingInput>;
export const MealCreatesettingInputObjectZodSchema = makeSchema();
