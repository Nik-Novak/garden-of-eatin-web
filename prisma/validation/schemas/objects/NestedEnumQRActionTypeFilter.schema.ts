import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionTypeSchema } from '../enums/QRActionType.schema'

const nestedenumqractiontypefilterSchema = z.object({
  equals: QRActionTypeSchema.optional(),
  in: QRActionTypeSchema.array().optional(),
  notIn: QRActionTypeSchema.array().optional(),
  not: z.union([QRActionTypeSchema, z.lazy(() => NestedEnumQRActionTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumQRActionTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumQRActionTypeFilter> = nestedenumqractiontypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumQRActionTypeFilter>;
export const NestedEnumQRActionTypeFilterObjectZodSchema = nestedenumqractiontypefilterSchema;
