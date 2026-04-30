import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FlyerPrintSettingsObjectEqualityInputObjectSchema as FlyerPrintSettingsObjectEqualityInputObjectSchema } from './FlyerPrintSettingsObjectEqualityInput.schema';
import { FlyerPrintSettingsWhereInputObjectSchema as FlyerPrintSettingsWhereInputObjectSchema } from './FlyerPrintSettingsWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => FlyerPrintSettingsObjectEqualityInputObjectSchema).optional().nullable(),
  is: z.lazy(() => FlyerPrintSettingsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => FlyerPrintSettingsWhereInputObjectSchema).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const FlyerPrintSettingsNullableCompositeFilterObjectSchema: z.ZodType<Prisma.FlyerPrintSettingsNullableCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.FlyerPrintSettingsNullableCompositeFilter>;
export const FlyerPrintSettingsNullableCompositeFilterObjectZodSchema = makeSchema();
