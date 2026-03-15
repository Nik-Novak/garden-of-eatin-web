import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchScalarWhereInputObjectSchema as MealOccurrenceSearchScalarWhereInputObjectSchema } from './MealOccurrenceSearchScalarWhereInput.schema';
import { MealOccurrenceSearchUpdateManyMutationInputObjectSchema as MealOccurrenceSearchUpdateManyMutationInputObjectSchema } from './MealOccurrenceSearchUpdateManyMutationInput.schema';
import { MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceInputObjectSchema as MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceInputObjectSchema } from './MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealOccurrenceSearchScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MealOccurrenceSearchUpdateManyMutationInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedUpdateManyWithoutDeviceInputObjectSchema)])
}).strict();
export const MealOccurrenceSearchUpdateManyWithWhereWithoutDeviceInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUpdateManyWithWhereWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUpdateManyWithWhereWithoutDeviceInput>;
export const MealOccurrenceSearchUpdateManyWithWhereWithoutDeviceInputObjectZodSchema = makeSchema();
