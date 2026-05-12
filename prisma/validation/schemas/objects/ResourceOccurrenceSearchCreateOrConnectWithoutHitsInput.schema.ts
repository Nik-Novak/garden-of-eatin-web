import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchWhereUniqueInputObjectSchema as ResourceOccurrenceSearchWhereUniqueInputObjectSchema } from './ResourceOccurrenceSearchWhereUniqueInput.schema';
import { ResourceOccurrenceSearchCreateWithoutHitsInputObjectSchema as ResourceOccurrenceSearchCreateWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchCreateWithoutHitsInput.schema';
import { ResourceOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema as ResourceOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchUncheckedCreateWithoutHitsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceOccurrenceSearchWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ResourceOccurrenceSearchCreateWithoutHitsInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema)])
}).strict();
export const ResourceOccurrenceSearchCreateOrConnectWithoutHitsInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchCreateOrConnectWithoutHitsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchCreateOrConnectWithoutHitsInput>;
export const ResourceOccurrenceSearchCreateOrConnectWithoutHitsInputObjectZodSchema = makeSchema();
