import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MenuPrintSettingsCreateInputObjectSchema as MenuPrintSettingsCreateInputObjectSchema } from './MenuPrintSettingsCreateInput.schema';
import { MenuPrintSettingsUpdateInputObjectSchema as MenuPrintSettingsUpdateInputObjectSchema } from './MenuPrintSettingsUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => MenuPrintSettingsCreateInputObjectSchema),
  update: z.lazy(() => MenuPrintSettingsUpdateInputObjectSchema)
}).strict();
export const MenuPrintSettingsUpsertInputObjectSchema: z.ZodType<Prisma.MenuPrintSettingsUpsertInput> = makeSchema() as unknown as z.ZodType<Prisma.MenuPrintSettingsUpsertInput>;
export const MenuPrintSettingsUpsertInputObjectZodSchema = makeSchema();
