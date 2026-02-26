import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => DeviceWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => DeviceWhereInputObjectSchema).optional().nullable()
}).strict();
export const DeviceNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DeviceNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DeviceNullableScalarRelationFilter>;
export const DeviceNullableScalarRelationFilterObjectZodSchema = makeSchema();
