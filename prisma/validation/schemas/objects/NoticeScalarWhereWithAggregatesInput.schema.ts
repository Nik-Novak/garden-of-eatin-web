import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumNoticeLevelWithAggregatesFilterObjectSchema as EnumNoticeLevelWithAggregatesFilterObjectSchema } from './EnumNoticeLevelWithAggregatesFilter.schema';
import { NoticeLevelSchema } from '../enums/NoticeLevel.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const noticescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => NoticeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => NoticeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NoticeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NoticeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => NoticeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  level: z.union([z.lazy(() => EnumNoticeLevelWithAggregatesFilterObjectSchema), NoticeLevelSchema]).optional(),
  content_md: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const NoticeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.NoticeScalarWhereWithAggregatesInput> = noticescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.NoticeScalarWhereWithAggregatesInput>;
export const NoticeScalarWhereWithAggregatesInputObjectZodSchema = noticescalarwherewithaggregatesinputSchema;
