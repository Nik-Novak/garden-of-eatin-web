import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCreateWithoutMeal_interactionsInputObjectSchema as MealCreateWithoutMeal_interactionsInputObjectSchema } from './MealCreateWithoutMeal_interactionsInput.schema';
import { MealUncheckedCreateWithoutMeal_interactionsInputObjectSchema as MealUncheckedCreateWithoutMeal_interactionsInputObjectSchema } from './MealUncheckedCreateWithoutMeal_interactionsInput.schema';
import { MealCreateOrConnectWithoutMeal_interactionsInputObjectSchema as MealCreateOrConnectWithoutMeal_interactionsInputObjectSchema } from './MealCreateOrConnectWithoutMeal_interactionsInput.schema';
import { MealUpsertWithoutMeal_interactionsInputObjectSchema as MealUpsertWithoutMeal_interactionsInputObjectSchema } from './MealUpsertWithoutMeal_interactionsInput.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealUpdateToOneWithWhereWithoutMeal_interactionsInputObjectSchema as MealUpdateToOneWithWhereWithoutMeal_interactionsInputObjectSchema } from './MealUpdateToOneWithWhereWithoutMeal_interactionsInput.schema';
import { MealUpdateWithoutMeal_interactionsInputObjectSchema as MealUpdateWithoutMeal_interactionsInputObjectSchema } from './MealUpdateWithoutMeal_interactionsInput.schema';
import { MealUncheckedUpdateWithoutMeal_interactionsInputObjectSchema as MealUncheckedUpdateWithoutMeal_interactionsInputObjectSchema } from './MealUncheckedUpdateWithoutMeal_interactionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealCreateWithoutMeal_interactionsInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutMeal_interactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MealCreateOrConnectWithoutMeal_interactionsInputObjectSchema).optional(),
  upsert: z.lazy(() => MealUpsertWithoutMeal_interactionsInputObjectSchema).optional(),
  connect: z.lazy(() => MealWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MealUpdateToOneWithWhereWithoutMeal_interactionsInputObjectSchema), z.lazy(() => MealUpdateWithoutMeal_interactionsInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutMeal_interactionsInputObjectSchema)]).optional()
}).strict();
export const MealUpdateOneRequiredWithoutMeal_interactionsNestedInputObjectSchema: z.ZodType<Prisma.MealUpdateOneRequiredWithoutMeal_interactionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdateOneRequiredWithoutMeal_interactionsNestedInput>;
export const MealUpdateOneRequiredWithoutMeal_interactionsNestedInputObjectZodSchema = makeSchema();
