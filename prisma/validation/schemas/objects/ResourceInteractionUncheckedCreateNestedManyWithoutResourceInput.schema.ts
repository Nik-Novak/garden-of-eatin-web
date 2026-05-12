import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionCreateWithoutResourceInputObjectSchema as ResourceInteractionCreateWithoutResourceInputObjectSchema } from './ResourceInteractionCreateWithoutResourceInput.schema';
import { ResourceInteractionUncheckedCreateWithoutResourceInputObjectSchema as ResourceInteractionUncheckedCreateWithoutResourceInputObjectSchema } from './ResourceInteractionUncheckedCreateWithoutResourceInput.schema';
import { ResourceInteractionCreateOrConnectWithoutResourceInputObjectSchema as ResourceInteractionCreateOrConnectWithoutResourceInputObjectSchema } from './ResourceInteractionCreateOrConnectWithoutResourceInput.schema';
import { ResourceInteractionCreateManyResourceInputEnvelopeObjectSchema as ResourceInteractionCreateManyResourceInputEnvelopeObjectSchema } from './ResourceInteractionCreateManyResourceInputEnvelope.schema';
import { ResourceInteractionWhereUniqueInputObjectSchema as ResourceInteractionWhereUniqueInputObjectSchema } from './ResourceInteractionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceInteractionCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceInteractionCreateWithoutResourceInputObjectSchema).array(), z.lazy(() => ResourceInteractionUncheckedCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceInteractionUncheckedCreateWithoutResourceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ResourceInteractionCreateOrConnectWithoutResourceInputObjectSchema), z.lazy(() => ResourceInteractionCreateOrConnectWithoutResourceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ResourceInteractionCreateManyResourceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema), z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ResourceInteractionUncheckedCreateNestedManyWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceInteractionUncheckedCreateNestedManyWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionUncheckedCreateNestedManyWithoutResourceInput>;
export const ResourceInteractionUncheckedCreateNestedManyWithoutResourceInputObjectZodSchema = makeSchema();
