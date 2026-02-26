import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceSelectObjectSchema as DeviceSelectObjectSchema } from './DeviceSelect.schema';
import { DeviceIncludeObjectSchema as DeviceIncludeObjectSchema } from './DeviceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DeviceSelectObjectSchema).optional(),
  include: z.lazy(() => DeviceIncludeObjectSchema).optional()
}).strict();
export const DeviceArgsObjectSchema = makeSchema();
export const DeviceArgsObjectZodSchema = makeSchema();
