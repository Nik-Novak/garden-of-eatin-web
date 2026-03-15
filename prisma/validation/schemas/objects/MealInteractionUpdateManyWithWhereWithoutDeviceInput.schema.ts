import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionScalarWhereInputObjectSchema as MealInteractionScalarWhereInputObjectSchema } from './MealInteractionScalarWhereInput.schema';
import { MealInteractionUpdateManyMutationInputObjectSchema as MealInteractionUpdateManyMutationInputObjectSchema } from './MealInteractionUpdateManyMutationInput.schema';
import { MealInteractionUncheckedUpdateManyWithoutDeviceInputObjectSchema as MealInteractionUncheckedUpdateManyWithoutDeviceInputObjectSchema } from './MealInteractionUncheckedUpdateManyWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealInteractionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MealInteractionUpdateManyMutationInputObjectSchema), z.lazy(() => MealInteractionUncheckedUpdateManyWithoutDeviceInputObjectSchema)])
}).strict();
export const MealInteractionUpdateManyWithWhereWithoutDeviceInputObjectSchema: z.ZodType<Prisma.MealInteractionUpdateManyWithWhereWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionUpdateManyWithWhereWithoutDeviceInput>;
export const MealInteractionUpdateManyWithWhereWithoutDeviceInputObjectZodSchema = makeSchema();
