import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { PointTypeSchema } from '../enums/PointType.schema'

const makeSchema = () => z.object({
  type: PointTypeSchema,
  coordinates: z.number().array().optional()
}).strict();
export const PointObjectEqualityInputObjectSchema: z.ZodType<Prisma.PointObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.PointObjectEqualityInput>;
export const PointObjectEqualityInputObjectZodSchema = makeSchema();
