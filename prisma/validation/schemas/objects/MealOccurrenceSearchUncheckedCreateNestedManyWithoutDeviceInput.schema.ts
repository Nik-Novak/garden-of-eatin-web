import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchCreateWithoutDeviceInputObjectSchema as MealOccurrenceSearchCreateWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchCreateWithoutDeviceInput.schema';
import { MealOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema as MealOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchUncheckedCreateWithoutDeviceInput.schema';
import { MealOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema as MealOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchCreateOrConnectWithoutDeviceInput.schema';
import { MealOccurrenceSearchCreateManyDeviceInputEnvelopeObjectSchema as MealOccurrenceSearchCreateManyDeviceInputEnvelopeObjectSchema } from './MealOccurrenceSearchCreateManyDeviceInputEnvelope.schema';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './MealOccurrenceSearchWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealOccurrenceSearchCreateWithoutDeviceInputObjectSchema), z.lazy(() => MealOccurrenceSearchCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => MealOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => MealOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MealOccurrenceSearchCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema), z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MealOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInput>;
export const MealOccurrenceSearchUncheckedCreateNestedManyWithoutDeviceInputObjectZodSchema = makeSchema();
