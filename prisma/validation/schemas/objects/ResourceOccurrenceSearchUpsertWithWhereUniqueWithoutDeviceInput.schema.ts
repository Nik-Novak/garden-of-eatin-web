import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchWhereUniqueInputObjectSchema as ResourceOccurrenceSearchWhereUniqueInputObjectSchema } from './ResourceOccurrenceSearchWhereUniqueInput.schema';
import { ResourceOccurrenceSearchUpdateWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchUpdateWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchUpdateWithoutDeviceInput.schema';
import { ResourceOccurrenceSearchUncheckedUpdateWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchUncheckedUpdateWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchUncheckedUpdateWithoutDeviceInput.schema';
import { ResourceOccurrenceSearchCreateWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchCreateWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchCreateWithoutDeviceInput.schema';
import { ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceOccurrenceSearchWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ResourceOccurrenceSearchUpdateWithoutDeviceInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUncheckedUpdateWithoutDeviceInputObjectSchema)]),
  create: z.union([z.lazy(() => ResourceOccurrenceSearchCreateWithoutDeviceInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const ResourceOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInput>;
export const ResourceOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
