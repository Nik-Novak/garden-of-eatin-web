import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchWhereUniqueInputObjectSchema as ResourceOccurrenceSearchWhereUniqueInputObjectSchema } from './ResourceOccurrenceSearchWhereUniqueInput.schema';
import { ResourceOccurrenceSearchCreateWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchCreateWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchCreateWithoutDeviceInput.schema';
import { ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceOccurrenceSearchWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ResourceOccurrenceSearchCreateWithoutDeviceInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const ResourceOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchCreateOrConnectWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchCreateOrConnectWithoutDeviceInput>;
export const ResourceOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectZodSchema = makeSchema();
