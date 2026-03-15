import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionWhereUniqueInputObjectSchema as MealInteractionWhereUniqueInputObjectSchema } from './MealInteractionWhereUniqueInput.schema';
import { MealInteractionUpdateWithoutDeviceInputObjectSchema as MealInteractionUpdateWithoutDeviceInputObjectSchema } from './MealInteractionUpdateWithoutDeviceInput.schema';
import { MealInteractionUncheckedUpdateWithoutDeviceInputObjectSchema as MealInteractionUncheckedUpdateWithoutDeviceInputObjectSchema } from './MealInteractionUncheckedUpdateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealInteractionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MealInteractionUpdateWithoutDeviceInputObjectSchema), z.lazy(() => MealInteractionUncheckedUpdateWithoutDeviceInputObjectSchema)])
}).strict();
export const MealInteractionUpdateWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.MealInteractionUpdateWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionUpdateWithWhereUniqueWithoutDeviceInput>;
export const MealInteractionUpdateWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
