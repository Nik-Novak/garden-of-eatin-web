import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealCreateWithoutMeal_occurrencesInputObjectSchema as MealCreateWithoutMeal_occurrencesInputObjectSchema } from './MealCreateWithoutMeal_occurrencesInput.schema';
import { MealUncheckedCreateWithoutMeal_occurrencesInputObjectSchema as MealUncheckedCreateWithoutMeal_occurrencesInputObjectSchema } from './MealUncheckedCreateWithoutMeal_occurrencesInput.schema';
import { MealCreateOrConnectWithoutMeal_occurrencesInputObjectSchema as MealCreateOrConnectWithoutMeal_occurrencesInputObjectSchema } from './MealCreateOrConnectWithoutMeal_occurrencesInput.schema';
import { MealUpsertWithoutMeal_occurrencesInputObjectSchema as MealUpsertWithoutMeal_occurrencesInputObjectSchema } from './MealUpsertWithoutMeal_occurrencesInput.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealUpdateToOneWithWhereWithoutMeal_occurrencesInputObjectSchema as MealUpdateToOneWithWhereWithoutMeal_occurrencesInputObjectSchema } from './MealUpdateToOneWithWhereWithoutMeal_occurrencesInput.schema';
import { MealUpdateWithoutMeal_occurrencesInputObjectSchema as MealUpdateWithoutMeal_occurrencesInputObjectSchema } from './MealUpdateWithoutMeal_occurrencesInput.schema';
import { MealUncheckedUpdateWithoutMeal_occurrencesInputObjectSchema as MealUncheckedUpdateWithoutMeal_occurrencesInputObjectSchema } from './MealUncheckedUpdateWithoutMeal_occurrencesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealCreateWithoutMeal_occurrencesInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutMeal_occurrencesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MealCreateOrConnectWithoutMeal_occurrencesInputObjectSchema).optional(),
  upsert: z.lazy(() => MealUpsertWithoutMeal_occurrencesInputObjectSchema).optional(),
  connect: z.lazy(() => MealWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MealUpdateToOneWithWhereWithoutMeal_occurrencesInputObjectSchema), z.lazy(() => MealUpdateWithoutMeal_occurrencesInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutMeal_occurrencesInputObjectSchema)]).optional()
}).strict();
export const MealUpdateOneRequiredWithoutMeal_occurrencesNestedInputObjectSchema: z.ZodType<Prisma.MealUpdateOneRequiredWithoutMeal_occurrencesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdateOneRequiredWithoutMeal_occurrencesNestedInput>;
export const MealUpdateOneRequiredWithoutMeal_occurrencesNestedInputObjectZodSchema = makeSchema();
