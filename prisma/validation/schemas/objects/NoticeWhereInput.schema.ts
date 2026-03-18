import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumNoticeLevelFilterObjectSchema as EnumNoticeLevelFilterObjectSchema } from './EnumNoticeLevelFilter.schema';
import { NoticeLevelSchema } from '../enums/NoticeLevel.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const noticewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => NoticeWhereInputObjectSchema), z.lazy(() => NoticeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NoticeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NoticeWhereInputObjectSchema), z.lazy(() => NoticeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  level: z.union([z.lazy(() => EnumNoticeLevelFilterObjectSchema), NoticeLevelSchema]).optional(),
  content_md: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const NoticeWhereInputObjectSchema: z.ZodType<Prisma.NoticeWhereInput> = noticewhereinputSchema as unknown as z.ZodType<Prisma.NoticeWhereInput>;
export const NoticeWhereInputObjectZodSchema = noticewhereinputSchema;
