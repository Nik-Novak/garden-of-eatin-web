import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchUpdateWithoutHitsInputObjectSchema as ResourceOccurrenceSearchUpdateWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchUpdateWithoutHitsInput.schema';
import { ResourceOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema as ResourceOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchUncheckedUpdateWithoutHitsInput.schema';
import { ResourceOccurrenceSearchCreateWithoutHitsInputObjectSchema as ResourceOccurrenceSearchCreateWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchCreateWithoutHitsInput.schema';
import { ResourceOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema as ResourceOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchUncheckedCreateWithoutHitsInput.schema';
import { ResourceOccurrenceSearchWhereInputObjectSchema as ResourceOccurrenceSearchWhereInputObjectSchema } from './ResourceOccurrenceSearchWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ResourceOccurrenceSearchUpdateWithoutHitsInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema)]),
  create: z.union([z.lazy(() => ResourceOccurrenceSearchCreateWithoutHitsInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema)]),
  where: z.lazy(() => ResourceOccurrenceSearchWhereInputObjectSchema).optional()
}).strict();
export const ResourceOccurrenceSearchUpsertWithoutHitsInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchUpsertWithoutHitsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchUpsertWithoutHitsInput>;
export const ResourceOccurrenceSearchUpsertWithoutHitsInputObjectZodSchema = makeSchema();
