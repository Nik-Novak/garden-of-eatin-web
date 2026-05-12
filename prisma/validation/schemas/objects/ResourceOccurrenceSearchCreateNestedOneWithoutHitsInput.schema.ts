import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchCreateWithoutHitsInputObjectSchema as ResourceOccurrenceSearchCreateWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchCreateWithoutHitsInput.schema';
import { ResourceOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema as ResourceOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchUncheckedCreateWithoutHitsInput.schema';
import { ResourceOccurrenceSearchCreateOrConnectWithoutHitsInputObjectSchema as ResourceOccurrenceSearchCreateOrConnectWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchCreateOrConnectWithoutHitsInput.schema';
import { ResourceOccurrenceSearchWhereUniqueInputObjectSchema as ResourceOccurrenceSearchWhereUniqueInputObjectSchema } from './ResourceOccurrenceSearchWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceOccurrenceSearchCreateWithoutHitsInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ResourceOccurrenceSearchCreateOrConnectWithoutHitsInputObjectSchema).optional(),
  connect: z.lazy(() => ResourceOccurrenceSearchWhereUniqueInputObjectSchema).optional()
}).strict();
export const ResourceOccurrenceSearchCreateNestedOneWithoutHitsInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchCreateNestedOneWithoutHitsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchCreateNestedOneWithoutHitsInput>;
export const ResourceOccurrenceSearchCreateNestedOneWithoutHitsInputObjectZodSchema = makeSchema();
