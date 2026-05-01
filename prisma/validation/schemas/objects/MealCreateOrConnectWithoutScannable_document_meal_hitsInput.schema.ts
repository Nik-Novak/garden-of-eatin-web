import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealCreateWithoutScannable_document_meal_hitsInputObjectSchema as MealCreateWithoutScannable_document_meal_hitsInputObjectSchema } from './MealCreateWithoutScannable_document_meal_hitsInput.schema';
import { MealUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema as MealUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema } from './MealUncheckedCreateWithoutScannable_document_meal_hitsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MealCreateWithoutScannable_document_meal_hitsInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema)])
}).strict();
export const MealCreateOrConnectWithoutScannable_document_meal_hitsInputObjectSchema: z.ZodType<Prisma.MealCreateOrConnectWithoutScannable_document_meal_hitsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealCreateOrConnectWithoutScannable_document_meal_hitsInput>;
export const MealCreateOrConnectWithoutScannable_document_meal_hitsInputObjectZodSchema = makeSchema();
