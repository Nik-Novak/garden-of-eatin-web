import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FlyerPrintSettingsNullableUpdateEnvelopeInputObjectSchema as FlyerPrintSettingsNullableUpdateEnvelopeInputObjectSchema } from './FlyerPrintSettingsNullableUpdateEnvelopeInput.schema';
import { FlyerPrintSettingsCreateInputObjectSchema as FlyerPrintSettingsCreateInputObjectSchema } from './FlyerPrintSettingsCreateInput.schema';
import { BrochurePrintSettingsNullableUpdateEnvelopeInputObjectSchema as BrochurePrintSettingsNullableUpdateEnvelopeInputObjectSchema } from './BrochurePrintSettingsNullableUpdateEnvelopeInput.schema';
import { BrochurePrintSettingsCreateInputObjectSchema as BrochurePrintSettingsCreateInputObjectSchema } from './BrochurePrintSettingsCreateInput.schema';
import { MenuPrintSettingsNullableUpdateEnvelopeInputObjectSchema as MenuPrintSettingsNullableUpdateEnvelopeInputObjectSchema } from './MenuPrintSettingsNullableUpdateEnvelopeInput.schema';
import { MenuPrintSettingsCreateInputObjectSchema as MenuPrintSettingsCreateInputObjectSchema } from './MenuPrintSettingsCreateInput.schema';
import { QRCodePrintSettingsNullableUpdateEnvelopeInputObjectSchema as QRCodePrintSettingsNullableUpdateEnvelopeInputObjectSchema } from './QRCodePrintSettingsNullableUpdateEnvelopeInput.schema';
import { QRCodePrintSettingsCreateInputObjectSchema as QRCodePrintSettingsCreateInputObjectSchema } from './QRCodePrintSettingsCreateInput.schema'

const makeSchema = () => z.object({
  Flyer: z.union([z.lazy(() => FlyerPrintSettingsNullableUpdateEnvelopeInputObjectSchema), z.lazy(() => FlyerPrintSettingsCreateInputObjectSchema)]).optional().nullable(),
  Brochure: z.union([z.lazy(() => BrochurePrintSettingsNullableUpdateEnvelopeInputObjectSchema), z.lazy(() => BrochurePrintSettingsCreateInputObjectSchema)]).optional().nullable(),
  Menu: z.union([z.lazy(() => MenuPrintSettingsNullableUpdateEnvelopeInputObjectSchema), z.lazy(() => MenuPrintSettingsCreateInputObjectSchema)]).optional().nullable(),
  QRCode: z.union([z.lazy(() => QRCodePrintSettingsNullableUpdateEnvelopeInputObjectSchema), z.lazy(() => QRCodePrintSettingsCreateInputObjectSchema)]).optional().nullable()
}).strict();
export const PrintSettingsUpdateInputObjectSchema: z.ZodType<Prisma.PrintSettingsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PrintSettingsUpdateInput>;
export const PrintSettingsUpdateInputObjectZodSchema = makeSchema();
