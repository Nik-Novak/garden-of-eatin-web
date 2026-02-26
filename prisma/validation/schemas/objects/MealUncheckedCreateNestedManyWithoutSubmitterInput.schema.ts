import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MealCreateWithoutSubmitterInputObjectSchema as MealCreateWithoutSubmitterInputObjectSchema } from './MealCreateWithoutSubmitterInput.schema';
import { MealUncheckedCreateWithoutSubmitterInputObjectSchema as MealUncheckedCreateWithoutSubmitterInputObjectSchema } from './MealUncheckedCreateWithoutSubmitterInput.schema';
import { MealCreateOrConnectWithoutSubmitterInputObjectSchema as MealCreateOrConnectWithoutSubmitterInputObjectSchema } from './MealCreateOrConnectWithoutSubmitterInput.schema';
import { MealCreateManySubmitterInputEnvelopeObjectSchema as MealCreateManySubmitterInputEnvelopeObjectSchema } from './MealCreateManySubmitterInputEnvelope.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealCreateWithoutSubmitterInputObjectSchema), z.lazy(() => MealCreateWithoutSubmitterInputObjectSchema).array(), z.lazy(() => MealUncheckedCreateWithoutSubmitterInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutSubmitterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealCreateOrConnectWithoutSubmitterInputObjectSchema), z.lazy(() => MealCreateOrConnectWithoutSubmitterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MealCreateManySubmitterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MealWhereUniqueInputObjectSchema), z.lazy(() => MealWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MealUncheckedCreateNestedManyWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.MealUncheckedCreateNestedManyWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUncheckedCreateNestedManyWithoutSubmitterInput>;
export const MealUncheckedCreateNestedManyWithoutSubmitterInputObjectZodSchema = makeSchema();
