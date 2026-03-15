import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InteractionTypeSchema } from '../enums/InteractionType.schema';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { DeviceCreateNestedOneWithoutMeal_interactionsInputObjectSchema as DeviceCreateNestedOneWithoutMeal_interactionsInputObjectSchema } from './DeviceCreateNestedOneWithoutMeal_interactionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  interaction_type: InteractionTypeSchema,
  user_location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  device: z.lazy(() => DeviceCreateNestedOneWithoutMeal_interactionsInputObjectSchema)
}).strict();
export const MealInteractionCreateWithoutMealInputObjectSchema: z.ZodType<Prisma.MealInteractionCreateWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionCreateWithoutMealInput>;
export const MealInteractionCreateWithoutMealInputObjectZodSchema = makeSchema();
