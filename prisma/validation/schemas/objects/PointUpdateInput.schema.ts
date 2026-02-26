import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { PointTypeSchema } from '../enums/PointType.schema';
import { EnumPointTypeFieldUpdateOperationsInputObjectSchema as EnumPointTypeFieldUpdateOperationsInputObjectSchema } from './EnumPointTypeFieldUpdateOperationsInput.schema';
import { PointUpdatecoordinatesInputObjectSchema as PointUpdatecoordinatesInputObjectSchema } from './PointUpdatecoordinatesInput.schema'

const makeSchema = () => z.object({
  type: z.union([PointTypeSchema, z.lazy(() => EnumPointTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  coordinates: z.union([z.lazy(() => PointUpdatecoordinatesInputObjectSchema), z.number().array()]).optional()
}).strict();
export const PointUpdateInputObjectSchema: z.ZodType<Prisma.PointUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PointUpdateInput>;
export const PointUpdateInputObjectZodSchema = makeSchema();
