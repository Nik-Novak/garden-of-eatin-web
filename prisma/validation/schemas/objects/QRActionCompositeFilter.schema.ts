import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionObjectEqualityInputObjectSchema as QRActionObjectEqualityInputObjectSchema } from './QRActionObjectEqualityInput.schema';
import { QRActionWhereInputObjectSchema as QRActionWhereInputObjectSchema } from './QRActionWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => QRActionObjectEqualityInputObjectSchema).optional(),
  is: z.lazy(() => QRActionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => QRActionWhereInputObjectSchema).optional()
}).strict();
export const QRActionCompositeFilterObjectSchema: z.ZodType<Prisma.QRActionCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.QRActionCompositeFilter>;
export const QRActionCompositeFilterObjectZodSchema = makeSchema();
