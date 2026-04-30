import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FlyerPrintSettingsCreateInputObjectSchema as FlyerPrintSettingsCreateInputObjectSchema } from './FlyerPrintSettingsCreateInput.schema';
import { FlyerPrintSettingsUpsertInputObjectSchema as FlyerPrintSettingsUpsertInputObjectSchema } from './FlyerPrintSettingsUpsertInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => FlyerPrintSettingsCreateInputObjectSchema).optional(),
  upsert: z.lazy(() => FlyerPrintSettingsUpsertInputObjectSchema).optional(),
  unset: z.boolean().optional()
}).strict();
export const FlyerPrintSettingsNullableUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.FlyerPrintSettingsNullableUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.FlyerPrintSettingsNullableUpdateEnvelopeInput>;
export const FlyerPrintSettingsNullableUpdateEnvelopeInputObjectZodSchema = makeSchema();
