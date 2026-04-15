import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceWhereInputObjectSchema as ResourceWhereInputObjectSchema } from './ResourceWhereInput.schema';
import { ResourceUpdateWithoutResource_occurrencesInputObjectSchema as ResourceUpdateWithoutResource_occurrencesInputObjectSchema } from './ResourceUpdateWithoutResource_occurrencesInput.schema';
import { ResourceUncheckedUpdateWithoutResource_occurrencesInputObjectSchema as ResourceUncheckedUpdateWithoutResource_occurrencesInputObjectSchema } from './ResourceUncheckedUpdateWithoutResource_occurrencesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ResourceUpdateWithoutResource_occurrencesInputObjectSchema), z.lazy(() => ResourceUncheckedUpdateWithoutResource_occurrencesInputObjectSchema)])
}).strict();
export const ResourceUpdateToOneWithWhereWithoutResource_occurrencesInputObjectSchema: z.ZodType<Prisma.ResourceUpdateToOneWithWhereWithoutResource_occurrencesInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpdateToOneWithWhereWithoutResource_occurrencesInput>;
export const ResourceUpdateToOneWithWhereWithoutResource_occurrencesInputObjectZodSchema = makeSchema();
