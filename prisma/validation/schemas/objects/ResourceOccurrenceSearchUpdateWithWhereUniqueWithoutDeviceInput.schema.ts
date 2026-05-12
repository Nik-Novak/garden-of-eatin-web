import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchWhereUniqueInputObjectSchema as ResourceOccurrenceSearchWhereUniqueInputObjectSchema } from './ResourceOccurrenceSearchWhereUniqueInput.schema';
import { ResourceOccurrenceSearchUpdateWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchUpdateWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchUpdateWithoutDeviceInput.schema';
import { ResourceOccurrenceSearchUncheckedUpdateWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchUncheckedUpdateWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchUncheckedUpdateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceOccurrenceSearchWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ResourceOccurrenceSearchUpdateWithoutDeviceInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUncheckedUpdateWithoutDeviceInputObjectSchema)])
}).strict();
export const ResourceOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInput>;
export const ResourceOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
