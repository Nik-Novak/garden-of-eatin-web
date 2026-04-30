import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FlyerPrintSettingsCreateInputObjectSchema as FlyerPrintSettingsCreateInputObjectSchema } from './FlyerPrintSettingsCreateInput.schema';
import { FlyerPrintSettingsUpdateInputObjectSchema as FlyerPrintSettingsUpdateInputObjectSchema } from './FlyerPrintSettingsUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => FlyerPrintSettingsCreateInputObjectSchema),
  update: z.lazy(() => FlyerPrintSettingsUpdateInputObjectSchema)
}).strict();
export const FlyerPrintSettingsUpsertInputObjectSchema: z.ZodType<Prisma.FlyerPrintSettingsUpsertInput> = makeSchema() as unknown as z.ZodType<Prisma.FlyerPrintSettingsUpsertInput>;
export const FlyerPrintSettingsUpsertInputObjectZodSchema = makeSchema();
