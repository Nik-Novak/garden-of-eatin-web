import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCreateWithoutScannable_document_meal_hitsInputObjectSchema as MealCreateWithoutScannable_document_meal_hitsInputObjectSchema } from './MealCreateWithoutScannable_document_meal_hitsInput.schema';
import { MealUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema as MealUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema } from './MealUncheckedCreateWithoutScannable_document_meal_hitsInput.schema';
import { MealCreateOrConnectWithoutScannable_document_meal_hitsInputObjectSchema as MealCreateOrConnectWithoutScannable_document_meal_hitsInputObjectSchema } from './MealCreateOrConnectWithoutScannable_document_meal_hitsInput.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealCreateWithoutScannable_document_meal_hitsInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MealCreateOrConnectWithoutScannable_document_meal_hitsInputObjectSchema).optional(),
  connect: z.lazy(() => MealWhereUniqueInputObjectSchema).optional()
}).strict();
export const MealCreateNestedOneWithoutScannable_document_meal_hitsInputObjectSchema: z.ZodType<Prisma.MealCreateNestedOneWithoutScannable_document_meal_hitsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreateNestedOneWithoutScannable_document_meal_hitsInput>;
export const MealCreateNestedOneWithoutScannable_document_meal_hitsInputObjectZodSchema = makeSchema();
