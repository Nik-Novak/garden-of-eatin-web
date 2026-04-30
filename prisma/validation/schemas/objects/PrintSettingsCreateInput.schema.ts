import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FlyerPrintSettingsCreateInputObjectSchema as FlyerPrintSettingsCreateInputObjectSchema } from './FlyerPrintSettingsCreateInput.schema';
import { BrochurePrintSettingsCreateInputObjectSchema as BrochurePrintSettingsCreateInputObjectSchema } from './BrochurePrintSettingsCreateInput.schema';
import { MenuPrintSettingsCreateInputObjectSchema as MenuPrintSettingsCreateInputObjectSchema } from './MenuPrintSettingsCreateInput.schema';
import { QRCodePrintSettingsCreateInputObjectSchema as QRCodePrintSettingsCreateInputObjectSchema } from './QRCodePrintSettingsCreateInput.schema'

const makeSchema = () => z.object({
  Flyer: z.lazy(() => FlyerPrintSettingsCreateInputObjectSchema).optional().nullable(),
  Brochure: z.lazy(() => BrochurePrintSettingsCreateInputObjectSchema).optional().nullable(),
  Menu: z.lazy(() => MenuPrintSettingsCreateInputObjectSchema).optional().nullable(),
  QRCode: z.lazy(() => QRCodePrintSettingsCreateInputObjectSchema).optional().nullable()
}).strict();
export const PrintSettingsCreateInputObjectSchema: z.ZodType<Prisma.PrintSettingsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PrintSettingsCreateInput>;
export const PrintSettingsCreateInputObjectZodSchema = makeSchema();
