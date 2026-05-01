import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema';
import { MealUpdateWithoutScannable_document_meal_hitsInputObjectSchema as MealUpdateWithoutScannable_document_meal_hitsInputObjectSchema } from './MealUpdateWithoutScannable_document_meal_hitsInput.schema';
import { MealUncheckedUpdateWithoutScannable_document_meal_hitsInputObjectSchema as MealUncheckedUpdateWithoutScannable_document_meal_hitsInputObjectSchema } from './MealUncheckedUpdateWithoutScannable_document_meal_hitsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MealUpdateWithoutScannable_document_meal_hitsInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutScannable_document_meal_hitsInputObjectSchema)])
}).strict();
export const MealUpdateToOneWithWhereWithoutScannable_document_meal_hitsInputObjectSchema: z.ZodType<Prisma.MealUpdateToOneWithWhereWithoutScannable_document_meal_hitsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdateToOneWithWhereWithoutScannable_document_meal_hitsInput>;
export const MealUpdateToOneWithWhereWithoutScannable_document_meal_hitsInputObjectZodSchema = makeSchema();
