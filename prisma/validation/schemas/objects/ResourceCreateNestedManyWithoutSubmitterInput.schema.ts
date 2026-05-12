import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceCreateWithoutSubmitterInputObjectSchema as ResourceCreateWithoutSubmitterInputObjectSchema } from './ResourceCreateWithoutSubmitterInput.schema';
import { ResourceUncheckedCreateWithoutSubmitterInputObjectSchema as ResourceUncheckedCreateWithoutSubmitterInputObjectSchema } from './ResourceUncheckedCreateWithoutSubmitterInput.schema';
import { ResourceCreateOrConnectWithoutSubmitterInputObjectSchema as ResourceCreateOrConnectWithoutSubmitterInputObjectSchema } from './ResourceCreateOrConnectWithoutSubmitterInput.schema';
import { ResourceCreateManySubmitterInputEnvelopeObjectSchema as ResourceCreateManySubmitterInputEnvelopeObjectSchema } from './ResourceCreateManySubmitterInputEnvelope.schema';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './ResourceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceCreateWithoutSubmitterInputObjectSchema), z.lazy(() => ResourceCreateWithoutSubmitterInputObjectSchema).array(), z.lazy(() => ResourceUncheckedCreateWithoutSubmitterInputObjectSchema), z.lazy(() => ResourceUncheckedCreateWithoutSubmitterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResourceCreateOrConnectWithoutSubmitterInputObjectSchema), z.lazy(() => ResourceCreateOrConnectWithoutSubmitterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResourceCreateManySubmitterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ResourceWhereUniqueInputObjectSchema), z.lazy(() => ResourceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ResourceCreateNestedManyWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.ResourceCreateNestedManyWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreateNestedManyWithoutSubmitterInput>;
export const ResourceCreateNestedManyWithoutSubmitterInputObjectZodSchema = makeSchema();
