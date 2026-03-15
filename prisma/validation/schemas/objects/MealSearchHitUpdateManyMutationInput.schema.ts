import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MealSearchHitUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.MealSearchHitUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitUpdateManyMutationInput>;
export const MealSearchHitUpdateManyMutationInputObjectZodSchema = makeSchema();
