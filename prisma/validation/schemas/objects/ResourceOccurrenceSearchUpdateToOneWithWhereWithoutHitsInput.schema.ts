import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchWhereInputObjectSchema as ResourceOccurrenceSearchWhereInputObjectSchema } from './ResourceOccurrenceSearchWhereInput.schema';
import { ResourceOccurrenceSearchUpdateWithoutHitsInputObjectSchema as ResourceOccurrenceSearchUpdateWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchUpdateWithoutHitsInput.schema';
import { ResourceOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema as ResourceOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchUncheckedUpdateWithoutHitsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceOccurrenceSearchWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ResourceOccurrenceSearchUpdateWithoutHitsInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema)])
}).strict();
export const ResourceOccurrenceSearchUpdateToOneWithWhereWithoutHitsInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchUpdateToOneWithWhereWithoutHitsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchUpdateToOneWithWhereWithoutHitsInput>;
export const ResourceOccurrenceSearchUpdateToOneWithWhereWithoutHitsInputObjectZodSchema = makeSchema();
