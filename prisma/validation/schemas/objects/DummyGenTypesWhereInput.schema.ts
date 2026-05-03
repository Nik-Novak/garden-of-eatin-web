import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { QRActionUrlRedirectPayloadCompositeFilterObjectSchema as QRActionUrlRedirectPayloadCompositeFilterObjectSchema } from './QRActionUrlRedirectPayloadCompositeFilter.schema';
import { QRActionUrlRedirectPayloadObjectEqualityInputObjectSchema as QRActionUrlRedirectPayloadObjectEqualityInputObjectSchema } from './QRActionUrlRedirectPayloadObjectEqualityInput.schema'

const dummygentypeswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DummyGenTypesWhereInputObjectSchema), z.lazy(() => DummyGenTypesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DummyGenTypesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DummyGenTypesWhereInputObjectSchema), z.lazy(() => DummyGenTypesWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  qrarp: z.union([z.lazy(() => QRActionUrlRedirectPayloadCompositeFilterObjectSchema), z.lazy(() => QRActionUrlRedirectPayloadObjectEqualityInputObjectSchema)]).optional()
}).strict();
export const DummyGenTypesWhereInputObjectSchema: z.ZodType<Prisma.DummyGenTypesWhereInput> = dummygentypeswhereinputSchema as unknown as z.ZodType<Prisma.DummyGenTypesWhereInput>;
export const DummyGenTypesWhereInputObjectZodSchema = dummygentypeswhereinputSchema;
