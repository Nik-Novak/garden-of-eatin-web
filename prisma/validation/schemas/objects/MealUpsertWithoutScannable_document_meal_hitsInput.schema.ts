import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealUpdateWithoutScannable_document_meal_hitsInputObjectSchema as MealUpdateWithoutScannable_document_meal_hitsInputObjectSchema } from './MealUpdateWithoutScannable_document_meal_hitsInput.schema';
import { MealUncheckedUpdateWithoutScannable_document_meal_hitsInputObjectSchema as MealUncheckedUpdateWithoutScannable_document_meal_hitsInputObjectSchema } from './MealUncheckedUpdateWithoutScannable_document_meal_hitsInput.schema';
import { MealCreateWithoutScannable_document_meal_hitsInputObjectSchema as MealCreateWithoutScannable_document_meal_hitsInputObjectSchema } from './MealCreateWithoutScannable_document_meal_hitsInput.schema';
import { MealUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema as MealUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema } from './MealUncheckedCreateWithoutScannable_document_meal_hitsInput.schema';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MealUpdateWithoutScannable_document_meal_hitsInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutScannable_document_meal_hitsInputObjectSchema)]),
  create: z.union([z.lazy(() => MealCreateWithoutScannable_document_meal_hitsInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema)]),
  where: z.lazy(() => MealWhereInputObjectSchema).optional()
}).strict();
export const MealUpsertWithoutScannable_document_meal_hitsInputObjectSchema: z.ZodType<Prisma.MealUpsertWithoutScannable_document_meal_hitsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpsertWithoutScannable_document_meal_hitsInput>;
export const MealUpsertWithoutScannable_document_meal_hitsInputObjectZodSchema = makeSchema();
