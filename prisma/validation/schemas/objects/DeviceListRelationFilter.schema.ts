import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => DeviceWhereInputObjectSchema).optional(),
  some: z.lazy(() => DeviceWhereInputObjectSchema).optional(),
  none: z.lazy(() => DeviceWhereInputObjectSchema).optional()
}).strict();
export const DeviceListRelationFilterObjectSchema: z.ZodType<Prisma.DeviceListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DeviceListRelationFilter>;
export const DeviceListRelationFilterObjectZodSchema = makeSchema();
