import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionWhereUniqueInputObjectSchema as MealInteractionWhereUniqueInputObjectSchema } from './MealInteractionWhereUniqueInput.schema';
import { MealInteractionUpdateWithoutDeviceInputObjectSchema as MealInteractionUpdateWithoutDeviceInputObjectSchema } from './MealInteractionUpdateWithoutDeviceInput.schema';
import { MealInteractionUncheckedUpdateWithoutDeviceInputObjectSchema as MealInteractionUncheckedUpdateWithoutDeviceInputObjectSchema } from './MealInteractionUncheckedUpdateWithoutDeviceInput.schema';
import { MealInteractionCreateWithoutDeviceInputObjectSchema as MealInteractionCreateWithoutDeviceInputObjectSchema } from './MealInteractionCreateWithoutDeviceInput.schema';
import { MealInteractionUncheckedCreateWithoutDeviceInputObjectSchema as MealInteractionUncheckedCreateWithoutDeviceInputObjectSchema } from './MealInteractionUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealInteractionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MealInteractionUpdateWithoutDeviceInputObjectSchema), z.lazy(() => MealInteractionUncheckedUpdateWithoutDeviceInputObjectSchema)]),
  create: z.union([z.lazy(() => MealInteractionCreateWithoutDeviceInputObjectSchema), z.lazy(() => MealInteractionUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const MealInteractionUpsertWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.MealInteractionUpsertWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionUpsertWithWhereUniqueWithoutDeviceInput>;
export const MealInteractionUpsertWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
