import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BrochurePrintSettingsObjectEqualityInputObjectSchema as BrochurePrintSettingsObjectEqualityInputObjectSchema } from './BrochurePrintSettingsObjectEqualityInput.schema';
import { BrochurePrintSettingsWhereInputObjectSchema as BrochurePrintSettingsWhereInputObjectSchema } from './BrochurePrintSettingsWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => BrochurePrintSettingsObjectEqualityInputObjectSchema).optional().nullable(),
  is: z.lazy(() => BrochurePrintSettingsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => BrochurePrintSettingsWhereInputObjectSchema).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const BrochurePrintSettingsNullableCompositeFilterObjectSchema: z.ZodType<Prisma.BrochurePrintSettingsNullableCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.BrochurePrintSettingsNullableCompositeFilter>;
export const BrochurePrintSettingsNullableCompositeFilterObjectZodSchema = makeSchema();
