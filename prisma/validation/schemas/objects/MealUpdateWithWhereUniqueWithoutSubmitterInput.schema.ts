import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealUpdateWithoutSubmitterInputObjectSchema as MealUpdateWithoutSubmitterInputObjectSchema } from './MealUpdateWithoutSubmitterInput.schema';
import { MealUncheckedUpdateWithoutSubmitterInputObjectSchema as MealUncheckedUpdateWithoutSubmitterInputObjectSchema } from './MealUncheckedUpdateWithoutSubmitterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MealUpdateWithoutSubmitterInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutSubmitterInputObjectSchema)])
}).strict();
export const MealUpdateWithWhereUniqueWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.MealUpdateWithWhereUniqueWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdateWithWhereUniqueWithoutSubmitterInput>;
export const MealUpdateWithWhereUniqueWithoutSubmitterInputObjectZodSchema = makeSchema();
