import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PointTypeSchema } from '../enums/PointType.schema';
import { NestedEnumPointTypeFilterObjectSchema as NestedEnumPointTypeFilterObjectSchema } from './NestedEnumPointTypeFilter.schema'

const makeSchema = () => z.object({
  equals: PointTypeSchema.optional(),
  in: PointTypeSchema.array().optional(),
  notIn: PointTypeSchema.array().optional(),
  not: z.union([PointTypeSchema, z.lazy(() => NestedEnumPointTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumPointTypeFilterObjectSchema: z.ZodType<Prisma.EnumPointTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPointTypeFilter>;
export const EnumPointTypeFilterObjectZodSchema = makeSchema();
