import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EnumPointTypeFilterObjectSchema as EnumPointTypeFilterObjectSchema } from './EnumPointTypeFilter.schema';
import { PointTypeSchema } from '../enums/PointType.schema';
import { FloatNullableListFilterObjectSchema as FloatNullableListFilterObjectSchema } from './FloatNullableListFilter.schema'

const pointwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PointWhereInputObjectSchema), z.lazy(() => PointWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PointWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PointWhereInputObjectSchema), z.lazy(() => PointWhereInputObjectSchema).array()]).optional(),
  type: z.union([z.lazy(() => EnumPointTypeFilterObjectSchema), PointTypeSchema]).optional(),
  coordinates: z.lazy(() => FloatNullableListFilterObjectSchema).optional()
}).strict();
export const PointWhereInputObjectSchema: z.ZodType<Prisma.PointWhereInput> = pointwhereinputSchema as unknown as z.ZodType<Prisma.PointWhereInput>;
export const PointWhereInputObjectZodSchema = pointwhereinputSchema;
