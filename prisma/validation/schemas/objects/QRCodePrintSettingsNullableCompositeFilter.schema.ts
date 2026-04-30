import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodePrintSettingsObjectEqualityInputObjectSchema as QRCodePrintSettingsObjectEqualityInputObjectSchema } from './QRCodePrintSettingsObjectEqualityInput.schema';
import { QRCodePrintSettingsWhereInputObjectSchema as QRCodePrintSettingsWhereInputObjectSchema } from './QRCodePrintSettingsWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => QRCodePrintSettingsObjectEqualityInputObjectSchema).optional().nullable(),
  is: z.lazy(() => QRCodePrintSettingsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => QRCodePrintSettingsWhereInputObjectSchema).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const QRCodePrintSettingsNullableCompositeFilterObjectSchema: z.ZodType<Prisma.QRCodePrintSettingsNullableCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.QRCodePrintSettingsNullableCompositeFilter>;
export const QRCodePrintSettingsNullableCompositeFilterObjectZodSchema = makeSchema();
