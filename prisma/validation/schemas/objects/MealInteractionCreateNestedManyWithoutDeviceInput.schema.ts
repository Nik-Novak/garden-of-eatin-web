import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionCreateWithoutDeviceInputObjectSchema as MealInteractionCreateWithoutDeviceInputObjectSchema } from './MealInteractionCreateWithoutDeviceInput.schema';
import { MealInteractionUncheckedCreateWithoutDeviceInputObjectSchema as MealInteractionUncheckedCreateWithoutDeviceInputObjectSchema } from './MealInteractionUncheckedCreateWithoutDeviceInput.schema';
import { MealInteractionCreateOrConnectWithoutDeviceInputObjectSchema as MealInteractionCreateOrConnectWithoutDeviceInputObjectSchema } from './MealInteractionCreateOrConnectWithoutDeviceInput.schema';
import { MealInteractionCreateManyDeviceInputEnvelopeObjectSchema as MealInteractionCreateManyDeviceInputEnvelopeObjectSchema } from './MealInteractionCreateManyDeviceInputEnvelope.schema';
import { MealInteractionWhereUniqueInputObjectSchema as MealInteractionWhereUniqueInputObjectSchema } from './MealInteractionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealInteractionCreateWithoutDeviceInputObjectSchema), z.lazy(() => MealInteractionCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => MealInteractionUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => MealInteractionUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MealInteractionCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => MealInteractionCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MealInteractionCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MealInteractionWhereUniqueInputObjectSchema), z.lazy(() => MealInteractionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MealInteractionCreateNestedManyWithoutDeviceInputObjectSchema: z.ZodType<Prisma.MealInteractionCreateNestedManyWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionCreateNestedManyWithoutDeviceInput>;
export const MealInteractionCreateNestedManyWithoutDeviceInputObjectZodSchema = makeSchema();
