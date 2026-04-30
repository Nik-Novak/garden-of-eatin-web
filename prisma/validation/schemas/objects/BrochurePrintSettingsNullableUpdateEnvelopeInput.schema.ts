import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BrochurePrintSettingsCreateInputObjectSchema as BrochurePrintSettingsCreateInputObjectSchema } from './BrochurePrintSettingsCreateInput.schema';
import { BrochurePrintSettingsUpsertInputObjectSchema as BrochurePrintSettingsUpsertInputObjectSchema } from './BrochurePrintSettingsUpsertInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => BrochurePrintSettingsCreateInputObjectSchema).optional(),
  upsert: z.lazy(() => BrochurePrintSettingsUpsertInputObjectSchema).optional(),
  unset: z.boolean().optional()
}).strict();
export const BrochurePrintSettingsNullableUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.BrochurePrintSettingsNullableUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.BrochurePrintSettingsNullableUpdateEnvelopeInput>;
export const BrochurePrintSettingsNullableUpdateEnvelopeInputObjectZodSchema = makeSchema();
