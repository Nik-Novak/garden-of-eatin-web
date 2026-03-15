import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './MealOccurrenceSearchWhereUniqueInput.schema';
import { MealOccurrenceSearchUpdateWithoutDeviceInputObjectSchema as MealOccurrenceSearchUpdateWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchUpdateWithoutDeviceInput.schema';
import { MealOccurrenceSearchUncheckedUpdateWithoutDeviceInputObjectSchema as MealOccurrenceSearchUncheckedUpdateWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchUncheckedUpdateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MealOccurrenceSearchUpdateWithoutDeviceInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedUpdateWithoutDeviceInputObjectSchema)])
}).strict();
export const MealOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInput>;
export const MealOccurrenceSearchUpdateWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
