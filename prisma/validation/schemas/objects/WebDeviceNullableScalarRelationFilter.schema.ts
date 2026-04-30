import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceWhereInputObjectSchema as WebDeviceWhereInputObjectSchema } from './WebDeviceWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => WebDeviceWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => WebDeviceWhereInputObjectSchema).optional().nullable()
}).strict();
export const WebDeviceNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.WebDeviceNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceNullableScalarRelationFilter>;
export const WebDeviceNullableScalarRelationFilterObjectZodSchema = makeSchema();
