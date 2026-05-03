import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const dummygentypesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DummyGenTypesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DummyGenTypesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DummyGenTypesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DummyGenTypesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DummyGenTypesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional()
}).strict();
export const DummyGenTypesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DummyGenTypesScalarWhereWithAggregatesInput> = dummygentypesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DummyGenTypesScalarWhereWithAggregatesInput>;
export const DummyGenTypesScalarWhereWithAggregatesInputObjectZodSchema = dummygentypesscalarwherewithaggregatesinputSchema;
