import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './MealOccurrenceSearchWhereUniqueInput.schema';
import { MealOccurrenceSearchCreateWithoutDeviceInputObjectSchema as MealOccurrenceSearchCreateWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchCreateWithoutDeviceInput.schema';
import { MealOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema as MealOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MealOccurrenceSearchCreateWithoutDeviceInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const MealOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchCreateOrConnectWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchCreateOrConnectWithoutDeviceInput>;
export const MealOccurrenceSearchCreateOrConnectWithoutDeviceInputObjectZodSchema = makeSchema();
