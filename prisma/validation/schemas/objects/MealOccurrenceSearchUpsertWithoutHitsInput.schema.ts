import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchUpdateWithoutHitsInputObjectSchema as MealOccurrenceSearchUpdateWithoutHitsInputObjectSchema } from './MealOccurrenceSearchUpdateWithoutHitsInput.schema';
import { MealOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema as MealOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema } from './MealOccurrenceSearchUncheckedUpdateWithoutHitsInput.schema';
import { MealOccurrenceSearchCreateWithoutHitsInputObjectSchema as MealOccurrenceSearchCreateWithoutHitsInputObjectSchema } from './MealOccurrenceSearchCreateWithoutHitsInput.schema';
import { MealOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema as MealOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema } from './MealOccurrenceSearchUncheckedCreateWithoutHitsInput.schema';
import { MealOccurrenceSearchWhereInputObjectSchema as MealOccurrenceSearchWhereInputObjectSchema } from './MealOccurrenceSearchWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MealOccurrenceSearchUpdateWithoutHitsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema)]),
  create: z.union([z.lazy(() => MealOccurrenceSearchCreateWithoutHitsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema)]),
  where: z.lazy(() => MealOccurrenceSearchWhereInputObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchUpsertWithoutHitsInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUpsertWithoutHitsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUpsertWithoutHitsInput>;
export const MealOccurrenceSearchUpsertWithoutHitsInputObjectZodSchema = makeSchema();
