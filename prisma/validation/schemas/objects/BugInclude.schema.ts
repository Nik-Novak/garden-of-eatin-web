import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema'

const makeSchema = () => z.object({
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional()
}).strict();
export const BugIncludeObjectSchema: z.ZodType<Prisma.BugInclude> = makeSchema() as unknown as z.ZodType<Prisma.BugInclude>;
export const BugIncludeObjectZodSchema = makeSchema();
