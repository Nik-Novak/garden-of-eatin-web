import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dark_mode: z.boolean()
}).strict();
export const QRCodePrintSettingsObjectEqualityInputObjectSchema: z.ZodType<Prisma.QRCodePrintSettingsObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodePrintSettingsObjectEqualityInput>;
export const QRCodePrintSettingsObjectEqualityInputObjectZodSchema = makeSchema();
