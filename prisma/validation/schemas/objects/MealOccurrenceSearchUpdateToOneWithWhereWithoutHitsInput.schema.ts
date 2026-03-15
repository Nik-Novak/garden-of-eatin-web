import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchWhereInputObjectSchema as MealOccurrenceSearchWhereInputObjectSchema } from './MealOccurrenceSearchWhereInput.schema';
import { MealOccurrenceSearchUpdateWithoutHitsInputObjectSchema as MealOccurrenceSearchUpdateWithoutHitsInputObjectSchema } from './MealOccurrenceSearchUpdateWithoutHitsInput.schema';
import { MealOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema as MealOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema } from './MealOccurrenceSearchUncheckedUpdateWithoutHitsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealOccurrenceSearchWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MealOccurrenceSearchUpdateWithoutHitsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema)])
}).strict();
export const MealOccurrenceSearchUpdateToOneWithWhereWithoutHitsInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUpdateToOneWithWhereWithoutHitsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUpdateToOneWithWhereWithoutHitsInput>;
export const MealOccurrenceSearchUpdateToOneWithWhereWithoutHitsInputObjectZodSchema = makeSchema();
