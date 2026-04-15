import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceUpdateWithoutResource_occurrencesInputObjectSchema as ResourceUpdateWithoutResource_occurrencesInputObjectSchema } from './ResourceUpdateWithoutResource_occurrencesInput.schema';
import { ResourceUncheckedUpdateWithoutResource_occurrencesInputObjectSchema as ResourceUncheckedUpdateWithoutResource_occurrencesInputObjectSchema } from './ResourceUncheckedUpdateWithoutResource_occurrencesInput.schema';
import { ResourceCreateWithoutResource_occurrencesInputObjectSchema as ResourceCreateWithoutResource_occurrencesInputObjectSchema } from './ResourceCreateWithoutResource_occurrencesInput.schema';
import { ResourceUncheckedCreateWithoutResource_occurrencesInputObjectSchema as ResourceUncheckedCreateWithoutResource_occurrencesInputObjectSchema } from './ResourceUncheckedCreateWithoutResource_occurrencesInput.schema';
import { ResourceWhereInputObjectSchema as ResourceWhereInputObjectSchema } from './ResourceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ResourceUpdateWithoutResource_occurrencesInputObjectSchema), z.lazy(() => ResourceUncheckedUpdateWithoutResource_occurrencesInputObjectSchema)]),
  create: z.union([z.lazy(() => ResourceCreateWithoutResource_occurrencesInputObjectSchema), z.lazy(() => ResourceUncheckedCreateWithoutResource_occurrencesInputObjectSchema)]),
  where: z.lazy(() => ResourceWhereInputObjectSchema).optional()
}).strict();
export const ResourceUpsertWithoutResource_occurrencesInputObjectSchema: z.ZodType<Prisma.ResourceUpsertWithoutResource_occurrencesInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpsertWithoutResource_occurrencesInput>;
export const ResourceUpsertWithoutResource_occurrencesInputObjectZodSchema = makeSchema();
