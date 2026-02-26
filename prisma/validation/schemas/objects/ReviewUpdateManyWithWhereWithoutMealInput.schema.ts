import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ReviewScalarWhereInputObjectSchema as ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema';
import { ReviewUpdateManyMutationInputObjectSchema as ReviewUpdateManyMutationInputObjectSchema } from './ReviewUpdateManyMutationInput.schema';
import { ReviewUncheckedUpdateManyWithoutMealInputObjectSchema as ReviewUncheckedUpdateManyWithoutMealInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateManyMutationInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateManyWithoutMealInputObjectSchema)])
}).strict();
export const ReviewUpdateManyWithWhereWithoutMealInputObjectSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutMealInput>;
export const ReviewUpdateManyWithWhereWithoutMealInputObjectZodSchema = makeSchema();
