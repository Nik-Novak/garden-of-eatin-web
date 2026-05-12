import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceArgsObjectSchema as ResourceArgsObjectSchema } from './ResourceArgs.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema'

const makeSchema = () => z.object({
  resource: z.union([z.boolean(), z.lazy(() => ResourceArgsObjectSchema)]).optional(),
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional()
}).strict();
export const ResourceInteractionIncludeObjectSchema: z.ZodType<Prisma.ResourceInteractionInclude> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionInclude>;
export const ResourceInteractionIncludeObjectZodSchema = makeSchema();
