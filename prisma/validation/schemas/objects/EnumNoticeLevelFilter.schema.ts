import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NoticeLevelSchema } from '../enums/NoticeLevel.schema';
import { NestedEnumNoticeLevelFilterObjectSchema as NestedEnumNoticeLevelFilterObjectSchema } from './NestedEnumNoticeLevelFilter.schema'

const makeSchema = () => z.object({
  equals: NoticeLevelSchema.optional(),
  in: NoticeLevelSchema.array().optional(),
  notIn: NoticeLevelSchema.array().optional(),
  not: z.union([NoticeLevelSchema, z.lazy(() => NestedEnumNoticeLevelFilterObjectSchema)]).optional()
}).strict();
export const EnumNoticeLevelFilterObjectSchema: z.ZodType<Prisma.EnumNoticeLevelFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumNoticeLevelFilter>;
export const EnumNoticeLevelFilterObjectZodSchema = makeSchema();
