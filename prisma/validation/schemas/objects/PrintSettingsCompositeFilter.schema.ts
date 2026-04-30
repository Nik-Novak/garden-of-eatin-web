import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PrintSettingsObjectEqualityInputObjectSchema as PrintSettingsObjectEqualityInputObjectSchema } from './PrintSettingsObjectEqualityInput.schema';
import { PrintSettingsWhereInputObjectSchema as PrintSettingsWhereInputObjectSchema } from './PrintSettingsWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => PrintSettingsObjectEqualityInputObjectSchema).optional(),
  is: z.lazy(() => PrintSettingsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => PrintSettingsWhereInputObjectSchema).optional()
}).strict();
export const PrintSettingsCompositeFilterObjectSchema: z.ZodType<Prisma.PrintSettingsCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.PrintSettingsCompositeFilter>;
export const PrintSettingsCompositeFilterObjectZodSchema = makeSchema();
