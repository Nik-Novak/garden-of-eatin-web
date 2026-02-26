import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealCreateWithoutSubmitterInputObjectSchema as MealCreateWithoutSubmitterInputObjectSchema } from './MealCreateWithoutSubmitterInput.schema';
import { MealUncheckedCreateWithoutSubmitterInputObjectSchema as MealUncheckedCreateWithoutSubmitterInputObjectSchema } from './MealUncheckedCreateWithoutSubmitterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MealCreateWithoutSubmitterInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutSubmitterInputObjectSchema)])
}).strict();
export const MealCreateOrConnectWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.MealCreateOrConnectWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreateOrConnectWithoutSubmitterInput>;
export const MealCreateOrConnectWithoutSubmitterInputObjectZodSchema = makeSchema();
