import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { PointTypeSchema } from '../enums/PointType.schema'

const nestedenumpointtypefilterSchema = z.object({
  equals: PointTypeSchema.optional(),
  in: PointTypeSchema.array().optional(),
  notIn: PointTypeSchema.array().optional(),
  not: z.union([PointTypeSchema, z.lazy(() => NestedEnumPointTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumPointTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumPointTypeFilter> = nestedenumpointtypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumPointTypeFilter>;
export const NestedEnumPointTypeFilterObjectZodSchema = nestedenumpointtypefilterSchema;
