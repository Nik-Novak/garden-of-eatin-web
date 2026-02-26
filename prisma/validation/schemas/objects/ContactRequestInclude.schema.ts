import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema'

const makeSchema = () => z.object({
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional()
}).strict();
export const ContactRequestIncludeObjectSchema: z.ZodType<Prisma.ContactRequestInclude> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestInclude>;
export const ContactRequestIncludeObjectZodSchema = makeSchema();
