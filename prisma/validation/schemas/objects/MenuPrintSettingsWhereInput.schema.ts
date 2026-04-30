import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const menuprintsettingswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MenuPrintSettingsWhereInputObjectSchema), z.lazy(() => MenuPrintSettingsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MenuPrintSettingsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MenuPrintSettingsWhereInputObjectSchema), z.lazy(() => MenuPrintSettingsWhereInputObjectSchema).array()]).optional(),
  dark_mode: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const MenuPrintSettingsWhereInputObjectSchema: z.ZodType<Prisma.MenuPrintSettingsWhereInput> = menuprintsettingswhereinputSchema as unknown as z.ZodType<Prisma.MenuPrintSettingsWhereInput>;
export const MenuPrintSettingsWhereInputObjectZodSchema = menuprintsettingswhereinputSchema;
