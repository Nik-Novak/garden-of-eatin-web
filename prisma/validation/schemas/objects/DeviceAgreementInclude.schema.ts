import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { AgreementArgsObjectSchema as AgreementArgsObjectSchema } from './AgreementArgs.schema'

const makeSchema = () => z.object({
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  agreement: z.union([z.boolean(), z.lazy(() => AgreementArgsObjectSchema)]).optional()
}).strict();
export const DeviceAgreementIncludeObjectSchema: z.ZodType<Prisma.DeviceAgreementInclude> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementInclude>;
export const DeviceAgreementIncludeObjectZodSchema = makeSchema();
