import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PrintSettingsCreateInputObjectSchema as PrintSettingsCreateInputObjectSchema } from './PrintSettingsCreateInput.schema';
import { PrintSettingsUpdateInputObjectSchema as PrintSettingsUpdateInputObjectSchema } from './PrintSettingsUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => PrintSettingsCreateInputObjectSchema).optional(),
  update: z.lazy(() => PrintSettingsUpdateInputObjectSchema).optional()
}).strict();
export const PrintSettingsUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.PrintSettingsUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.PrintSettingsUpdateEnvelopeInput>;
export const PrintSettingsUpdateEnvelopeInputObjectZodSchema = makeSchema();
