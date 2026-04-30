import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FlyerPrintSettingsOrderByInputObjectSchema as FlyerPrintSettingsOrderByInputObjectSchema } from './FlyerPrintSettingsOrderByInput.schema';
import { BrochurePrintSettingsOrderByInputObjectSchema as BrochurePrintSettingsOrderByInputObjectSchema } from './BrochurePrintSettingsOrderByInput.schema';
import { MenuPrintSettingsOrderByInputObjectSchema as MenuPrintSettingsOrderByInputObjectSchema } from './MenuPrintSettingsOrderByInput.schema';
import { QRCodePrintSettingsOrderByInputObjectSchema as QRCodePrintSettingsOrderByInputObjectSchema } from './QRCodePrintSettingsOrderByInput.schema'

const makeSchema = () => z.object({
  Flyer: z.lazy(() => FlyerPrintSettingsOrderByInputObjectSchema).optional(),
  Brochure: z.lazy(() => BrochurePrintSettingsOrderByInputObjectSchema).optional(),
  Menu: z.lazy(() => MenuPrintSettingsOrderByInputObjectSchema).optional(),
  QRCode: z.lazy(() => QRCodePrintSettingsOrderByInputObjectSchema).optional()
}).strict();
export const PrintSettingsOrderByInputObjectSchema: z.ZodType<Prisma.PrintSettingsOrderByInput> = makeSchema() as unknown as z.ZodType<Prisma.PrintSettingsOrderByInput>;
export const PrintSettingsOrderByInputObjectZodSchema = makeSchema();
