import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateManyMealInputObjectSchema as ReviewCreateManyMealInputObjectSchema } from './ReviewCreateManyMealInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReviewCreateManyMealInputObjectSchema), z.lazy(() => ReviewCreateManyMealInputObjectSchema).array()])
}).strict();
export const ReviewCreateManyMealInputEnvelopeObjectSchema: z.ZodType<Prisma.ReviewCreateManyMealInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyMealInputEnvelope>;
export const ReviewCreateManyMealInputEnvelopeObjectZodSchema = makeSchema();
