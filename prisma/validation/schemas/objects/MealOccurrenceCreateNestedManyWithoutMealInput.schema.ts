import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealOccurrenceCreateWithoutMealInputObjectSchema as MealOccurrenceCreateWithoutMealInputObjectSchema } from './MealOccurrenceCreateWithoutMealInput.schema';
import { MealOccurrenceUncheckedCreateWithoutMealInputObjectSchema as MealOccurrenceUncheckedCreateWithoutMealInputObjectSchema } from './MealOccurrenceUncheckedCreateWithoutMealInput.schema';
import { MealOccurrenceCreateOrConnectWithoutMealInputObjectSchema as MealOccurrenceCreateOrConnectWithoutMealInputObjectSchema } from './MealOccurrenceCreateOrConnectWithoutMealInput.schema';
import { MealOccurrenceCreateManyMealInputEnvelopeObjectSchema as MealOccurrenceCreateManyMealInputEnvelopeObjectSchema } from './MealOccurrenceCreateManyMealInputEnvelope.schema';
import { MealOccurrenceWhereUniqueInputObjectSchema as MealOccurrenceWhereUniqueInputObjectSchema } from './MealOccurrenceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealOccurrenceCreateWithoutMealInputObjectSchema), z.lazy(() => MealOccurrenceCreateWithoutMealInputObjectSchema).array(), z.lazy(() => MealOccurrenceUncheckedCreateWithoutMealInputObjectSchema), z.lazy(() => MealOccurrenceUncheckedCreateWithoutMealInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealOccurrenceCreateOrConnectWithoutMealInputObjectSchema), z.lazy(() => MealOccurrenceCreateOrConnectWithoutMealInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MealOccurrenceCreateManyMealInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MealOccurrenceWhereUniqueInputObjectSchema), z.lazy(() => MealOccurrenceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MealOccurrenceCreateNestedManyWithoutMealInputObjectSchema: z.ZodType<Prisma.MealOccurrenceCreateNestedManyWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceCreateNestedManyWithoutMealInput>;
export const MealOccurrenceCreateNestedManyWithoutMealInputObjectZodSchema = makeSchema();
