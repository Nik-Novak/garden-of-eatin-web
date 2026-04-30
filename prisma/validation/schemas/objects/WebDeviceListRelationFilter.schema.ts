import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceWhereInputObjectSchema as WebDeviceWhereInputObjectSchema } from './WebDeviceWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WebDeviceWhereInputObjectSchema).optional(),
  some: z.lazy(() => WebDeviceWhereInputObjectSchema).optional(),
  none: z.lazy(() => WebDeviceWhereInputObjectSchema).optional()
}).strict();
export const WebDeviceListRelationFilterObjectSchema: z.ZodType<Prisma.WebDeviceListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceListRelationFilter>;
export const WebDeviceListRelationFilterObjectZodSchema = makeSchema();
