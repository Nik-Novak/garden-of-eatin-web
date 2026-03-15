import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './MealOccurrenceSearchWhereUniqueInput.schema';
import { MealOccurrenceSearchUpdateWithoutDeviceInputObjectSchema as MealOccurrenceSearchUpdateWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchUpdateWithoutDeviceInput.schema';
import { MealOccurrenceSearchUncheckedUpdateWithoutDeviceInputObjectSchema as MealOccurrenceSearchUncheckedUpdateWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchUncheckedUpdateWithoutDeviceInput.schema';
import { MealOccurrenceSearchCreateWithoutDeviceInputObjectSchema as MealOccurrenceSearchCreateWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchCreateWithoutDeviceInput.schema';
import { MealOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema as MealOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MealOccurrenceSearchUpdateWithoutDeviceInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedUpdateWithoutDeviceInputObjectSchema)]),
  create: z.union([z.lazy(() => MealOccurrenceSearchCreateWithoutDeviceInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const MealOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInput>;
export const MealOccurrenceSearchUpsertWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
