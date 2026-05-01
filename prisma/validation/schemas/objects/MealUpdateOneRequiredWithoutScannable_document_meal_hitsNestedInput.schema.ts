import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCreateWithoutScannable_document_meal_hitsInputObjectSchema as MealCreateWithoutScannable_document_meal_hitsInputObjectSchema } from './MealCreateWithoutScannable_document_meal_hitsInput.schema';
import { MealUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema as MealUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema } from './MealUncheckedCreateWithoutScannable_document_meal_hitsInput.schema';
import { MealCreateOrConnectWithoutScannable_document_meal_hitsInputObjectSchema as MealCreateOrConnectWithoutScannable_document_meal_hitsInputObjectSchema } from './MealCreateOrConnectWithoutScannable_document_meal_hitsInput.schema';
import { MealUpsertWithoutScannable_document_meal_hitsInputObjectSchema as MealUpsertWithoutScannable_document_meal_hitsInputObjectSchema } from './MealUpsertWithoutScannable_document_meal_hitsInput.schema';
import { MealWhereUniqueInputObjectSchema as MealWhereUniqueInputObjectSchema } from './MealWhereUniqueInput.schema';
import { MealUpdateToOneWithWhereWithoutScannable_document_meal_hitsInputObjectSchema as MealUpdateToOneWithWhereWithoutScannable_document_meal_hitsInputObjectSchema } from './MealUpdateToOneWithWhereWithoutScannable_document_meal_hitsInput.schema';
import { MealUpdateWithoutScannable_document_meal_hitsInputObjectSchema as MealUpdateWithoutScannable_document_meal_hitsInputObjectSchema } from './MealUpdateWithoutScannable_document_meal_hitsInput.schema';
import { MealUncheckedUpdateWithoutScannable_document_meal_hitsInputObjectSchema as MealUncheckedUpdateWithoutScannable_document_meal_hitsInputObjectSchema } from './MealUncheckedUpdateWithoutScannable_document_meal_hitsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MealCreateWithoutScannable_document_meal_hitsInputObjectSchema), z.lazy(() => MealUncheckedCreateWithoutScannable_document_meal_hitsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MealCreateOrConnectWithoutScannable_document_meal_hitsInputObjectSchema).optional(),
  upsert: z.lazy(() => MealUpsertWithoutScannable_document_meal_hitsInputObjectSchema).optional(),
  connect: z.lazy(() => MealWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MealUpdateToOneWithWhereWithoutScannable_document_meal_hitsInputObjectSchema), z.lazy(() => MealUpdateWithoutScannable_document_meal_hitsInputObjectSchema), z.lazy(() => MealUncheckedUpdateWithoutScannable_document_meal_hitsInputObjectSchema)]).optional()
}).strict();
export const MealUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInputObjectSchema: z.ZodType<Prisma.MealUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MealUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInput>;
export const MealUpdateOneRequiredWithoutScannable_document_meal_hitsNestedInputObjectZodSchema = makeSchema();
