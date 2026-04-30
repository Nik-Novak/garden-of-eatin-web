import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PrintSettingsCreateInputObjectSchema as PrintSettingsCreateInputObjectSchema } from './PrintSettingsCreateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => PrintSettingsCreateInputObjectSchema).optional()
}).strict();
export const PrintSettingsCreateEnvelopeInputObjectSchema: z.ZodType<Prisma.PrintSettingsCreateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.PrintSettingsCreateEnvelopeInput>;
export const PrintSettingsCreateEnvelopeInputObjectZodSchema = makeSchema();
