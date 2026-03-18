import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NoticeLevelSchema } from '../enums/NoticeLevel.schema'

const nestedenumnoticelevelfilterSchema = z.object({
  equals: NoticeLevelSchema.optional(),
  in: NoticeLevelSchema.array().optional(),
  notIn: NoticeLevelSchema.array().optional(),
  not: z.union([NoticeLevelSchema, z.lazy(() => NestedEnumNoticeLevelFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumNoticeLevelFilterObjectSchema: z.ZodType<Prisma.NestedEnumNoticeLevelFilter> = nestedenumnoticelevelfilterSchema as unknown as z.ZodType<Prisma.NestedEnumNoticeLevelFilter>;
export const NestedEnumNoticeLevelFilterObjectZodSchema = nestedenumnoticelevelfilterSchema;
