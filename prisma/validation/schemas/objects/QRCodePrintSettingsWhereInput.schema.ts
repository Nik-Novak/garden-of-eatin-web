import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const qrcodeprintsettingswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => QRCodePrintSettingsWhereInputObjectSchema), z.lazy(() => QRCodePrintSettingsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QRCodePrintSettingsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QRCodePrintSettingsWhereInputObjectSchema), z.lazy(() => QRCodePrintSettingsWhereInputObjectSchema).array()]).optional(),
  dark_mode: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const QRCodePrintSettingsWhereInputObjectSchema: z.ZodType<Prisma.QRCodePrintSettingsWhereInput> = qrcodeprintsettingswhereinputSchema as unknown as z.ZodType<Prisma.QRCodePrintSettingsWhereInput>;
export const QRCodePrintSettingsWhereInputObjectZodSchema = qrcodeprintsettingswhereinputSchema;
