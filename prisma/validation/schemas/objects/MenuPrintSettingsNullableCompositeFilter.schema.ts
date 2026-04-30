import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MenuPrintSettingsObjectEqualityInputObjectSchema as MenuPrintSettingsObjectEqualityInputObjectSchema } from './MenuPrintSettingsObjectEqualityInput.schema';
import { MenuPrintSettingsWhereInputObjectSchema as MenuPrintSettingsWhereInputObjectSchema } from './MenuPrintSettingsWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => MenuPrintSettingsObjectEqualityInputObjectSchema).optional().nullable(),
  is: z.lazy(() => MenuPrintSettingsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => MenuPrintSettingsWhereInputObjectSchema).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const MenuPrintSettingsNullableCompositeFilterObjectSchema: z.ZodType<Prisma.MenuPrintSettingsNullableCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.MenuPrintSettingsNullableCompositeFilter>;
export const MenuPrintSettingsNullableCompositeFilterObjectZodSchema = makeSchema();
