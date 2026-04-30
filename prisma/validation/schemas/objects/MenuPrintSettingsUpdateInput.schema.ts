import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  dark_mode: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MenuPrintSettingsUpdateInputObjectSchema: z.ZodType<Prisma.MenuPrintSettingsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.MenuPrintSettingsUpdateInput>;
export const MenuPrintSettingsUpdateInputObjectZodSchema = makeSchema();
