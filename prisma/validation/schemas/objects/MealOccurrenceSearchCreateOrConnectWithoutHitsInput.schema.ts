import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './MealOccurrenceSearchWhereUniqueInput.schema';
import { MealOccurrenceSearchCreateWithoutHitsInputObjectSchema as MealOccurrenceSearchCreateWithoutHitsInputObjectSchema } from './MealOccurrenceSearchCreateWithoutHitsInput.schema';
import { MealOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema as MealOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema } from './MealOccurrenceSearchUncheckedCreateWithoutHitsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MealOccurrenceSearchCreateWithoutHitsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema)])
}).strict();
export const MealOccurrenceSearchCreateOrConnectWithoutHitsInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchCreateOrConnectWithoutHitsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchCreateOrConnectWithoutHitsInput>;
export const MealOccurrenceSearchCreateOrConnectWithoutHitsInputObjectZodSchema = makeSchema();
