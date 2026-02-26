import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ImageObjectEqualityInputObjectSchema as ImageObjectEqualityInputObjectSchema } from './ImageObjectEqualityInput.schema';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './ImageWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => ImageObjectEqualityInputObjectSchema).array().optional(),
  every: z.lazy(() => ImageWhereInputObjectSchema).optional(),
  some: z.lazy(() => ImageWhereInputObjectSchema).optional(),
  none: z.lazy(() => ImageWhereInputObjectSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();
export const ImageCompositeListFilterObjectSchema: z.ZodType<Prisma.ImageCompositeListFilter> = makeSchema() as unknown as z.ZodType<Prisma.ImageCompositeListFilter>;
export const ImageCompositeListFilterObjectZodSchema = makeSchema();
