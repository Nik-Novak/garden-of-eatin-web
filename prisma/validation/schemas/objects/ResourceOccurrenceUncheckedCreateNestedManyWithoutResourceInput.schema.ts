import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceCreateWithoutResourceInputObjectSchema as ResourceOccurrenceCreateWithoutResourceInputObjectSchema } from './ResourceOccurrenceCreateWithoutResourceInput.schema';
import { ResourceOccurrenceUncheckedCreateWithoutResourceInputObjectSchema as ResourceOccurrenceUncheckedCreateWithoutResourceInputObjectSchema } from './ResourceOccurrenceUncheckedCreateWithoutResourceInput.schema';
import { ResourceOccurrenceCreateOrConnectWithoutResourceInputObjectSchema as ResourceOccurrenceCreateOrConnectWithoutResourceInputObjectSchema } from './ResourceOccurrenceCreateOrConnectWithoutResourceInput.schema';
import { ResourceOccurrenceCreateManyResourceInputEnvelopeObjectSchema as ResourceOccurrenceCreateManyResourceInputEnvelopeObjectSchema } from './ResourceOccurrenceCreateManyResourceInputEnvelope.schema';
import { ResourceOccurrenceWhereUniqueInputObjectSchema as ResourceOccurrenceWhereUniqueInputObjectSchema } from './ResourceOccurrenceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceOccurrenceCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceOccurrenceCreateWithoutResourceInputObjectSchema).array(), z.lazy(() => ResourceOccurrenceUncheckedCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceOccurrenceUncheckedCreateWithoutResourceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResourceOccurrenceCreateOrConnectWithoutResourceInputObjectSchema), z.lazy(() => ResourceOccurrenceCreateOrConnectWithoutResourceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResourceOccurrenceCreateManyResourceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ResourceOccurrenceWhereUniqueInputObjectSchema), z.lazy(() => ResourceOccurrenceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ResourceOccurrenceUncheckedCreateNestedManyWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceUncheckedCreateNestedManyWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceUncheckedCreateNestedManyWithoutResourceInput>;
export const ResourceOccurrenceUncheckedCreateNestedManyWithoutResourceInputObjectZodSchema = makeSchema();
