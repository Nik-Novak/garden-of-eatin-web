import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './ResourceWhereUniqueInput.schema';
import { ResourceCreateWithoutResource_occurrencesInputObjectSchema as ResourceCreateWithoutResource_occurrencesInputObjectSchema } from './ResourceCreateWithoutResource_occurrencesInput.schema';
import { ResourceUncheckedCreateWithoutResource_occurrencesInputObjectSchema as ResourceUncheckedCreateWithoutResource_occurrencesInputObjectSchema } from './ResourceUncheckedCreateWithoutResource_occurrencesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ResourceCreateWithoutResource_occurrencesInputObjectSchema), z.lazy(() => ResourceUncheckedCreateWithoutResource_occurrencesInputObjectSchema)])
}).strict();
export const ResourceCreateOrConnectWithoutResource_occurrencesInputObjectSchema: z.ZodType<Prisma.ResourceCreateOrConnectWithoutResource_occurrencesInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreateOrConnectWithoutResource_occurrencesInput>;
export const ResourceCreateOrConnectWithoutResource_occurrencesInputObjectZodSchema = makeSchema();
