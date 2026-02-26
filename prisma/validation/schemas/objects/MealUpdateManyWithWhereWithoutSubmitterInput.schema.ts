import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealScalarWhereInputObjectSchema as MealScalarWhereInputObjectSchema } from './MealScalarWhereInput.schema';
import { MealUpdateManyMutationInputObjectSchema as MealUpdateManyMutationInputObjectSchema } from './MealUpdateManyMutationInput.schema';
import { MealUncheckedUpdateManyWithoutSubmitterInputObjectSchema as MealUncheckedUpdateManyWithoutSubmitterInputObjectSchema } from './MealUncheckedUpdateManyWithoutSubmitterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MealUpdateManyMutationInputObjectSchema), z.lazy(() => MealUncheckedUpdateManyWithoutSubmitterInputObjectSchema)])
}).strict();
export const MealUpdateManyWithWhereWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.MealUpdateManyWithWhereWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdateManyWithWhereWithoutSubmitterInput>;
export const MealUpdateManyWithWhereWithoutSubmitterInputObjectZodSchema = makeSchema();
