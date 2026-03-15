import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionWhereUniqueInputObjectSchema as MealInteractionWhereUniqueInputObjectSchema } from './MealInteractionWhereUniqueInput.schema';
import { MealInteractionCreateWithoutDeviceInputObjectSchema as MealInteractionCreateWithoutDeviceInputObjectSchema } from './MealInteractionCreateWithoutDeviceInput.schema';
import { MealInteractionUncheckedCreateWithoutDeviceInputObjectSchema as MealInteractionUncheckedCreateWithoutDeviceInputObjectSchema } from './MealInteractionUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealInteractionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MealInteractionCreateWithoutDeviceInputObjectSchema), z.lazy(() => MealInteractionUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const MealInteractionCreateOrConnectWithoutDeviceInputObjectSchema: z.ZodType<Prisma.MealInteractionCreateOrConnectWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionCreateOrConnectWithoutDeviceInput>;
export const MealInteractionCreateOrConnectWithoutDeviceInputObjectZodSchema = makeSchema();
