import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceCreateWithoutResource_occurrencesInputObjectSchema as ResourceCreateWithoutResource_occurrencesInputObjectSchema } from './ResourceCreateWithoutResource_occurrencesInput.schema';
import { ResourceUncheckedCreateWithoutResource_occurrencesInputObjectSchema as ResourceUncheckedCreateWithoutResource_occurrencesInputObjectSchema } from './ResourceUncheckedCreateWithoutResource_occurrencesInput.schema';
import { ResourceCreateOrConnectWithoutResource_occurrencesInputObjectSchema as ResourceCreateOrConnectWithoutResource_occurrencesInputObjectSchema } from './ResourceCreateOrConnectWithoutResource_occurrencesInput.schema';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './ResourceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceCreateWithoutResource_occurrencesInputObjectSchema), z.lazy(() => ResourceUncheckedCreateWithoutResource_occurrencesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ResourceCreateOrConnectWithoutResource_occurrencesInputObjectSchema).optional(),
  connect: z.lazy(() => ResourceWhereUniqueInputObjectSchema).optional()
}).strict();
export const ResourceCreateNestedOneWithoutResource_occurrencesInputObjectSchema: z.ZodType<Prisma.ResourceCreateNestedOneWithoutResource_occurrencesInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreateNestedOneWithoutResource_occurrencesInput>;
export const ResourceCreateNestedOneWithoutResource_occurrencesInputObjectZodSchema = makeSchema();
