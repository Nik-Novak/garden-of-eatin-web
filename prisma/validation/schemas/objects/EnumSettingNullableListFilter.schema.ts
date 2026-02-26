import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingSchema } from '../enums/Setting.schema'

const makeSchema = () => z.object({
  equals: SettingSchema.array().optional().nullable(),
  has: SettingSchema.optional().nullable(),
  hasEvery: SettingSchema.array().optional(),
  hasSome: SettingSchema.array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const EnumSettingNullableListFilterObjectSchema: z.ZodType<Prisma.EnumSettingNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSettingNullableListFilter>;
export const EnumSettingNullableListFilterObjectZodSchema = makeSchema();
