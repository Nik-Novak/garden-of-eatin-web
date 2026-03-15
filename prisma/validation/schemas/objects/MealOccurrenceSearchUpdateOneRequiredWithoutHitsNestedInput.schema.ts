import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchCreateWithoutHitsInputObjectSchema as MealOccurrenceSearchCreateWithoutHitsInputObjectSchema } from './MealOccurrenceSearchCreateWithoutHitsInput.schema';
import { MealOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema as MealOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema } from './MealOccurrenceSearchUncheckedCreateWithoutHitsInput.schema';
import { MealOccurrenceSearchCreateOrConnectWithoutHitsInputObjectSchema as MealOccurrenceSearchCreateOrConnectWithoutHitsInputObjectSchema } from './MealOccurrenceSearchCreateOrConnectWithoutHitsInput.schema';
import { MealOccurrenceSearchUpsertWithoutHitsInputObjectSchema as MealOccurrenceSearchUpsertWithoutHitsInputObjectSchema } from './MealOccurrenceSearchUpsertWithoutHitsInput.schema';
import { MealOccurrenceSearchWhereUniqueInputObjectSchema as MealOccurrenceSearchWhereUniqueInputObjectSchema } from './MealOccurrenceSearchWhereUniqueInput.schema';
import { MealOccurrenceSearchUpdateToOneWithWhereWithoutHitsInputObjectSchema as MealOccurrenceSearchUpdateToOneWithWhereWithoutHitsInputObjectSchema } from './MealOccurrenceSearchUpdateToOneWithWhereWithoutHitsInput.schema';
import { MealOccurrenceSearchUpdateWithoutHitsInputObjectSchema as MealOccurrenceSearchUpdateWithoutHitsInputObjectSchema } from './MealOccurrenceSearchUpdateWithoutHitsInput.schema';
import { MealOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema as MealOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema } from './MealOccurrenceSearchUncheckedUpdateWithoutHitsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealOccurrenceSearchCreateWithoutHitsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MealOccurrenceSearchCreateOrConnectWithoutHitsInputObjectSchema).optional(),
  upsert: z.lazy(() => MealOccurrenceSearchUpsertWithoutHitsInputObjectSchema).optional(),
  connect: z.lazy(() => MealOccurrenceSearchWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MealOccurrenceSearchUpdateToOneWithWhereWithoutHitsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUpdateWithoutHitsInputObjectSchema), z.lazy(() => MealOccurrenceSearchUncheckedUpdateWithoutHitsInputObjectSchema)]).optional()
}).strict();
export const MealOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInput>;
export const MealOccurrenceSearchUpdateOneRequiredWithoutHitsNestedInputObjectZodSchema = makeSchema();
