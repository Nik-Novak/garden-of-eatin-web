import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BrochurePrintSettingsCreateInputObjectSchema as BrochurePrintSettingsCreateInputObjectSchema } from './BrochurePrintSettingsCreateInput.schema';
import { BrochurePrintSettingsUpdateInputObjectSchema as BrochurePrintSettingsUpdateInputObjectSchema } from './BrochurePrintSettingsUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => BrochurePrintSettingsCreateInputObjectSchema),
  update: z.lazy(() => BrochurePrintSettingsUpdateInputObjectSchema)
}).strict();
export const BrochurePrintSettingsUpsertInputObjectSchema: z.ZodType<Prisma.BrochurePrintSettingsUpsertInput> = makeSchema() as unknown as z.ZodType<Prisma.BrochurePrintSettingsUpsertInput>;
export const BrochurePrintSettingsUpsertInputObjectZodSchema = makeSchema();
