import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  dark_mode: SortOrderSchema.optional()
}).strict();
export const MenuPrintSettingsOrderByInputObjectSchema: z.ZodType<Prisma.MenuPrintSettingsOrderByInput> = makeSchema() as unknown as z.ZodType<Prisma.MenuPrintSettingsOrderByInput>;
export const MenuPrintSettingsOrderByInputObjectZodSchema = makeSchema();
