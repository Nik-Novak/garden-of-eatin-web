import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => DeviceWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => DeviceWhereInputObjectSchema).optional()
}).strict();
export const DeviceScalarRelationFilterObjectSchema: z.ZodType<Prisma.DeviceScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DeviceScalarRelationFilter>;
export const DeviceScalarRelationFilterObjectZodSchema = makeSchema();
