import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { PointTypeSchema } from '../enums/PointType.schema';
import { PointCreatecoordinatesInputObjectSchema as PointCreatecoordinatesInputObjectSchema } from './PointCreatecoordinatesInput.schema'

const makeSchema = () => z.object({
  type: PointTypeSchema,
  coordinates: z.union([z.lazy(() => PointCreatecoordinatesInputObjectSchema), z.number().array()]).optional()
}).strict();
export const PointCreateInputObjectSchema: z.ZodType<Prisma.PointCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PointCreateInput>;
export const PointCreateInputObjectZodSchema = makeSchema();
