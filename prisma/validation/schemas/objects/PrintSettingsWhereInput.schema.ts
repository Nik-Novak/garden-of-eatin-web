import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FlyerPrintSettingsNullableCompositeFilterObjectSchema as FlyerPrintSettingsNullableCompositeFilterObjectSchema } from './FlyerPrintSettingsNullableCompositeFilter.schema';
import { FlyerPrintSettingsObjectEqualityInputObjectSchema as FlyerPrintSettingsObjectEqualityInputObjectSchema } from './FlyerPrintSettingsObjectEqualityInput.schema';
import { BrochurePrintSettingsNullableCompositeFilterObjectSchema as BrochurePrintSettingsNullableCompositeFilterObjectSchema } from './BrochurePrintSettingsNullableCompositeFilter.schema';
import { BrochurePrintSettingsObjectEqualityInputObjectSchema as BrochurePrintSettingsObjectEqualityInputObjectSchema } from './BrochurePrintSettingsObjectEqualityInput.schema';
import { MenuPrintSettingsNullableCompositeFilterObjectSchema as MenuPrintSettingsNullableCompositeFilterObjectSchema } from './MenuPrintSettingsNullableCompositeFilter.schema';
import { MenuPrintSettingsObjectEqualityInputObjectSchema as MenuPrintSettingsObjectEqualityInputObjectSchema } from './MenuPrintSettingsObjectEqualityInput.schema';
import { QRCodePrintSettingsNullableCompositeFilterObjectSchema as QRCodePrintSettingsNullableCompositeFilterObjectSchema } from './QRCodePrintSettingsNullableCompositeFilter.schema';
import { QRCodePrintSettingsObjectEqualityInputObjectSchema as QRCodePrintSettingsObjectEqualityInputObjectSchema } from './QRCodePrintSettingsObjectEqualityInput.schema'

const printsettingswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PrintSettingsWhereInputObjectSchema), z.lazy(() => PrintSettingsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PrintSettingsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PrintSettingsWhereInputObjectSchema), z.lazy(() => PrintSettingsWhereInputObjectSchema).array()]).optional(),
  Flyer: z.union([z.lazy(() => FlyerPrintSettingsNullableCompositeFilterObjectSchema), z.lazy(() => FlyerPrintSettingsObjectEqualityInputObjectSchema)]).optional().nullable(),
  Brochure: z.union([z.lazy(() => BrochurePrintSettingsNullableCompositeFilterObjectSchema), z.lazy(() => BrochurePrintSettingsObjectEqualityInputObjectSchema)]).optional().nullable(),
  Menu: z.union([z.lazy(() => MenuPrintSettingsNullableCompositeFilterObjectSchema), z.lazy(() => MenuPrintSettingsObjectEqualityInputObjectSchema)]).optional().nullable(),
  QRCode: z.union([z.lazy(() => QRCodePrintSettingsNullableCompositeFilterObjectSchema), z.lazy(() => QRCodePrintSettingsObjectEqualityInputObjectSchema)]).optional().nullable()
}).strict();
export const PrintSettingsWhereInputObjectSchema: z.ZodType<Prisma.PrintSettingsWhereInput> = printsettingswhereinputSchema as unknown as z.ZodType<Prisma.PrintSettingsWhereInput>;
export const PrintSettingsWhereInputObjectZodSchema = printsettingswhereinputSchema;
