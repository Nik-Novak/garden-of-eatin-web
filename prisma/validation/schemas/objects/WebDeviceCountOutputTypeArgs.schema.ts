import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceCountOutputTypeSelectObjectSchema as WebDeviceCountOutputTypeSelectObjectSchema } from './WebDeviceCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WebDeviceCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const WebDeviceCountOutputTypeArgsObjectSchema = makeSchema();
export const WebDeviceCountOutputTypeArgsObjectZodSchema = makeSchema();
