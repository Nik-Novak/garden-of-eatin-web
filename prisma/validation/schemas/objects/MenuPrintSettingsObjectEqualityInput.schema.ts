import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dark_mode: z.boolean()
}).strict();
export const MenuPrintSettingsObjectEqualityInputObjectSchema: z.ZodType<Prisma.MenuPrintSettingsObjectEqualityInput> = makeSchema() as unknown as z.ZodType<Prisma.MenuPrintSettingsObjectEqualityInput>;
export const MenuPrintSettingsObjectEqualityInputObjectZodSchema = makeSchema();
