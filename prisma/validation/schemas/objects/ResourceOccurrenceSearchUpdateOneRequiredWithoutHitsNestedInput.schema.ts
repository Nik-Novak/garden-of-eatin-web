import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchCreateWithoutHitsInputObjectSchema as ResourceOccurrenceSearchCreateWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchCreateWithoutHitsInput.schema';
import { ResourceOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema as ResourceOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchUncheckedCreateWithoutHitsInput.schema';
import { ResourceOccurrenceSearchCreateOrConnectWithoutHitsInputObjectSchema as ResourceOccurrenceSearchCreateOrConnectWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchCreateOrConnectWithoutHitsInput.schema';
import { ResourceOccurrenceSearchUpsertWithoutHitsInputObjectSchema as ResourceOccurrenceSearchUpsertWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchUpsertWithoutHitsInput.schema';
import { ResourceOccurrenceSearchWhereUniqueInputObjectSchema as ResourceOccurrenceSearchWhereUniqueInputObjectSchema } from './ResourceOccurrenceSearchWhereUniqueInput.schema';
import { ResourceOccurrenceSearchUpdateToOneWithWhereWithoutHitsInputObjectSchema as ResourceOccurrenceSearchUpdateToOneWithWhereWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchUpdateToOneWithWhereWithoutHitsInput.schema';
import { ResourceOccurrenceSearchUpdateWithoutHitsInputObjectSchema as ResourceOccurrenceSearchUpdateWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchUpdateWithoutHitsInput.schema';
import { ResourceOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema as ResourceOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema } from './ResourceOccurrenceSearchUncheckedUpdateWithoutHitsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ResourceOccurrenceSearchCreateWithoutHitsInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ResourceOccurrenceSearchCreateOrConnectWithoutHitsInputObjectSchema).optional(),
  upsert: z.lazy(() => ResourceOccurrenceSearchUpsertWithoutHitsInputObjectSchema).optional(),
  connect: z.lazy(() => ResourceOccurrenceSearchWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ResourceOccurrenceSearchUpdateToOneWithWhereWithoutHitsInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUpdateWithoutHitsInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema)]).optional()
}).strict();
export const ResourceOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInput>;
export const ResourceOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInputObjectZodSchema = makeSchema();
