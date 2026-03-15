import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchCreateWithoutHitsInputObjectSchema as MealOccurrenceSearchCreateWithoutHitsInputObjectSchema } from './MealOccurrenceSearchCreateWithoutHitsInput.schema';
import { MealOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema as MealOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema } from './MealOccurrenceSearchUncheckedCreateWithoutHitsInput.schema';
import { MealOccurrenceSearchCreateOrConnectWithoutHitsInputObjectSchema as MealOccurrenceSearchCreateOrConnectWithoutHitsInputObjectSchema } from './MealOccurrenceSearchCreateOrConnectWithoutHitsInput.schema';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './MealOccurrenceSearchWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealOccurrenceSearchCreateWithoutHitsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MealOccurrenceSearchCreateOrConnectWithoutHitsInputObjectSchema).optional(),
  connect: z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchCreateNestedOneWithoutHitsInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchCreateNestedOneWithoutHitsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchCreateNestedOneWithoutHitsInput>;
export const MealOccurrenceSearchCreateNestedOneWithoutHitsInputObjectZodSchema = makeSchema();
