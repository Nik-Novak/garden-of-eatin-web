import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceWhereUniqueInputObjectSchema as ResourceOccurrenceWhereUniqueInputObjectSchema } from './ResourceOccurrenceWhereUniqueInput.schema';
import { ResourceOccurrenceCreateWithoutResourceInputObjectSchema as ResourceOccurrenceCreateWithoutResourceInputObjectSchema } from './ResourceOccurrenceCreateWithoutResourceInput.schema';
import { ResourceOccurrenceUncheckedCreateWithoutResourceInputObjectSchema as ResourceOccurrenceUncheckedCreateWithoutResourceInputObjectSchema } from './ResourceOccurrenceUncheckedCreateWithoutResourceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceOccurrenceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ResourceOccurrenceCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceOccurrenceUncheckedCreateWithoutResourceInputObjectSchema)])
}).strict();
export const ResourceOccurrenceCreateOrConnectWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceCreateOrConnectWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceCreateOrConnectWithoutResourceInput>;
export const ResourceOccurrenceCreateOrConnectWithoutResourceInputObjectZodSchema = makeSchema();
