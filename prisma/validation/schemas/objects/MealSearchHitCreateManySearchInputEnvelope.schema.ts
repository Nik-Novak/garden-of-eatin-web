import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitCreateManySearchInputObjectSchema as MealSearchHitCreateManySearchInputObjectSchema } from './MealSearchHitCreateManySearchInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MealSearchHitCreateManySearchInputObjectSchema), z.lazy(() => MealSearchHitCreateManySearchInputObjectSchema).array()])
}).strict();
export const MealSearchHitCreateManySearchInputEnvelopeObjectSchema: z.ZodType<Prisma.MealSearchHitCreateManySearchInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitCreateManySearchInputEnvelope>;
export const MealSearchHitCreateManySearchInputEnvelopeObjectZodSchema = makeSchema();
