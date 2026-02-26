import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealUpdateWithoutSubmitterInputObjectSchema as MealUpdateWithoutSubmitterInputObjectSchema } from './MealUpdateWithoutSubmitterInput.schema';
import { MealUncheckedUpdateWithoutSubmitterInputObjectSchema as MealUncheckedUpdateWithoutSubmitterInputObjectSchema } from './MealUncheckedUpdateWithoutSubmitterInput.schema';
import { MealCreateWithoutSubmitterInputObjectSchema as MealCreateWithoutSubmitterInputObjectSchema } from './MealCreateWithoutSubmitterInput.schema';
import { MealUncheckedCreateWithoutSubmitterInputObjectSchema as MealUncheckedCreateWithoutSubmitterInputObjectSchema } from './MealUncheckedCreateWithoutSubmitterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MealUpdateWithoutSubmitterInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutSubmitterInputObjectSchema)]),
  create: z.union([z.lazy(() => MealCreateWithoutSubmitterInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutSubmitterInputObjectSchema)])
}).strict();
export const MealUpsertWithWhereUniqueWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.MealUpsertWithWhereUniqueWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpsertWithWhereUniqueWithoutSubmitterInput>;
export const MealUpsertWithWhereUniqueWithoutSubmitterInputObjectZodSchema = makeSchema();
