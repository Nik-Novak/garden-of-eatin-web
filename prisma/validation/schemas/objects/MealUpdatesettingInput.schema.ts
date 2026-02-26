import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { SettingSchema } from '../enums/Setting.schema'

const makeSchema = () => z.object({
  set: SettingSchema.array().optional(),
  push: z.union([SettingSchema, SettingSchema.array()]).optional()
}).strict();
export const MealUpdatesettingInputObjectSchema: z.ZodType<Prisma.MealUpdatesettingInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdatesettingInput>;
export const MealUpdatesettingInputObjectZodSchema = makeSchema();
