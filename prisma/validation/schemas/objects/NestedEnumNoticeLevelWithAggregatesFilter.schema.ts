import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NoticeLevelSchema } from '../enums/NoticeLevel.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumNoticeLevelFilterObjectSchema as NestedEnumNoticeLevelFilterObjectSchema } from './NestedEnumNoticeLevelFilter.schema'

const nestedenumnoticelevelwithaggregatesfilterSchema = z.object({
  equals: NoticeLevelSchema.optional(),
  in: NoticeLevelSchema.array().optional(),
  notIn: NoticeLevelSchema.array().optional(),
  not: z.union([NoticeLevelSchema, z.lazy(() => NestedEnumNoticeLevelWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumNoticeLevelFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumNoticeLevelFilterObjectSchema).optional()
}).strict();
export const NestedEnumNoticeLevelWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumNoticeLevelWithAggregatesFilter> = nestedenumnoticelevelwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumNoticeLevelWithAggregatesFilter>;
export const NestedEnumNoticeLevelWithAggregatesFilterObjectZodSchema = nestedenumnoticelevelwithaggregatesfilterSchema;
