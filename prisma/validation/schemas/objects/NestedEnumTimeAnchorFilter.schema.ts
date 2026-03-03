import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TimeAnchorSchema } from '../enums/TimeAnchor.schema'

const nestedenumtimeanchorfilterSchema = z.object({
  equals: TimeAnchorSchema.optional(),
  in: TimeAnchorSchema.array().optional(),
  notIn: TimeAnchorSchema.array().optional(),
  not: z.union([TimeAnchorSchema, z.lazy(() => NestedEnumTimeAnchorFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumTimeAnchorFilterObjectSchema: z.ZodType<Prisma.NestedEnumTimeAnchorFilter> = nestedenumtimeanchorfilterSchema as unknown as z.ZodType<Prisma.NestedEnumTimeAnchorFilter>;
export const NestedEnumTimeAnchorFilterObjectZodSchema = nestedenumtimeanchorfilterSchema;
