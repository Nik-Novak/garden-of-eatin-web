import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dark_mode: z.boolean()
}).strict();
export const MenuPrintSettingsCreateInputObjectSchema: z.ZodType<Prisma.MenuPrintSettingsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MenuPrintSettingsCreateInput>;
export const MenuPrintSettingsCreateInputObjectZodSchema = makeSchema();
