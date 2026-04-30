import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionTypeSchema } from '../enums/QRActionType.schema';
import { NestedEnumQRActionTypeFilterObjectSchema as NestedEnumQRActionTypeFilterObjectSchema } from './NestedEnumQRActionTypeFilter.schema'

const makeSchema = () => z.object({
  equals: QRActionTypeSchema.optional(),
  in: QRActionTypeSchema.array().optional(),
  notIn: QRActionTypeSchema.array().optional(),
  not: z.union([QRActionTypeSchema, z.lazy(() => NestedEnumQRActionTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumQRActionTypeFilterObjectSchema: z.ZodType<Prisma.EnumQRActionTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumQRActionTypeFilter>;
export const EnumQRActionTypeFilterObjectZodSchema = makeSchema();
