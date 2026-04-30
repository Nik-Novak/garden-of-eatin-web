import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FlyerPrintSettingsObjectEqualityInputObjectSchema as FlyerPrintSettingsObjectEqualityInputObjectSchema } from './FlyerPrintSettingsObjectEqualityInput.schema';
import { BrochurePrintSettingsObjectEqualityInputObjectSchema as BrochurePrintSettingsObjectEqualityInputObjectSchema } from './BrochurePrintSettingsObjectEqualityInput.schema';
import { MenuPrintSettingsObjectEqualityInputObjectSchema as MenuPrintSettingsObjectEqualityInputObjectSchema } from './MenuPrintSettingsObjectEqualityInput.schema';
import { QRCodePrintSettingsObjectEqualityInputObjectSchema as QRCodePrintSettingsObjectEqualityInputObjectSchema } from './QRCodePrintSettingsObjectEqualityInput.schema'

const makeSchema = () => z.object({
  Flyer: z.lazy(() => FlyerPrintSettingsObjectEqualityInputObjectSchema).optional().nullable(),
  Brochure: z.lazy(() => BrochurePrintSettingsObjectEqualityInputObjectSchema).optional().nullable(),
  Menu: z.lazy(() => MenuPrintSettingsObjectEqualityInputObjectSchema).optional().nullable(),
  QRCode: z.lazy(() => QRCodePrintSettingsObjectEqualityInputObjectSchema).optional().nullable()
}).strict();
export const PrintSettingsObjectEqualityInputObjectSchema: z.ZodType<Prisma.PrintSettingsObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.PrintSettingsObjectEqualityInput>;
export const PrintSettingsObjectEqualityInputObjectZodSchema = makeSchema();
