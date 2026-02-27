import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCountOutputTypeSelectObjectSchema as DeviceCountOutputTypeSelectObjectSchema } from './DeviceCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DeviceCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DeviceCountOutputTypeArgsObjectSchema = makeSchema();
export const DeviceCountOutputTypeArgsObjectZodSchema = makeSchema();
