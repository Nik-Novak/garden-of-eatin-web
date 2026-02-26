import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutMealInputObjectSchema as ReviewUpdateWithoutMealInputObjectSchema } from './ReviewUpdateWithoutMealInput.schema';
import { ReviewUncheckedUpdateWithoutMealInputObjectSchema as ReviewUncheckedUpdateWithoutMealInputObjectSchema } from './ReviewUncheckedUpdateWithoutMealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateWithoutMealInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutMealInputObjectSchema)])
}).strict();
export const ReviewUpdateWithWhereUniqueWithoutMealInputObjectSchema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutMealInput>;
export const ReviewUpdateWithWhereUniqueWithoutMealInputObjectZodSchema = makeSchema();
