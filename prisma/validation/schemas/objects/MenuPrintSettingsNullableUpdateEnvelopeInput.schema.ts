import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MenuPrintSettingsCreateInputObjectSchema as MenuPrintSettingsCreateInputObjectSchema } from './MenuPrintSettingsCreateInput.schema';
import { MenuPrintSettingsUpsertInputObjectSchema as MenuPrintSettingsUpsertInputObjectSchema } from './MenuPrintSettingsUpsertInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => MenuPrintSettingsCreateInputObjectSchema).optional(),
  upsert: z.lazy(() => MenuPrintSettingsUpsertInputObjectSchema).optional(),
  unset: z.boolean().optional()
}).strict();
export const MenuPrintSettingsNullableUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.MenuPrintSettingsNullableUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.MenuPrintSettingsNullableUpdateEnvelopeInput>;
export const MenuPrintSettingsNullableUpdateEnvelopeInputObjectZodSchema = makeSchema();
