import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceSelectObjectSchema as WebDeviceSelectObjectSchema } from './WebDeviceSelect.schema';
import { WebDeviceIncludeObjectSchema as WebDeviceIncludeObjectSchema } from './WebDeviceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WebDeviceSelectObjectSchema).optional(),
  include: z.lazy(() => WebDeviceIncludeObjectSchema).optional()
}).strict();
export const WebDeviceArgsObjectSchema = makeSchema();
export const WebDeviceArgsObjectZodSchema = makeSchema();
