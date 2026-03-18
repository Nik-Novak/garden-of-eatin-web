import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NoticeLevelSchema } from '../enums/NoticeLevel.schema';
import { NestedEnumNoticeLevelWithAggregatesFilterObjectSchema as NestedEnumNoticeLevelWithAggregatesFilterObjectSchema } from './NestedEnumNoticeLevelWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumNoticeLevelFilterObjectSchema as NestedEnumNoticeLevelFilterObjectSchema } from './NestedEnumNoticeLevelFilter.schema'

const makeSchema = () => z.object({
  equals: NoticeLevelSchema.optional(),
  in: NoticeLevelSchema.array().optional(),
  notIn: NoticeLevelSchema.array().optional(),
  not: z.union([NoticeLevelSchema, z.lazy(() => NestedEnumNoticeLevelWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumNoticeLevelFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumNoticeLevelFilterObjectSchema).optional()
}).strict();
export const EnumNoticeLevelWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumNoticeLevelWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumNoticeLevelWithAggregatesFilter>;
export const EnumNoticeLevelWithAggregatesFilterObjectZodSchema = makeSchema();
