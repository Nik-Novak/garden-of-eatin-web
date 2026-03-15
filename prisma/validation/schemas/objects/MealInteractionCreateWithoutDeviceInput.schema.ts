import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InteractionTypeSchema } from '../enums/InteractionType.schema';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { MealCreateNestedOneWithoutMeal_interactionsInputObjectSchema as MealCreateNestedOneWithoutMeal_interactionsInputObjectSchema } from './MealCreateNestedOneWithoutMeal_interactionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  interaction_type: InteractionTypeSchema,
  user_location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  meal: z.lazy(() => MealCreateNestedOneWithoutMeal_interactionsInputObjectSchema)
}).strict();
export const MealInteractionCreateWithoutDeviceInputObjectSchema: z.ZodType<Prisma.MealInteractionCreateWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionCreateWithoutDeviceInput>;
export const MealInteractionCreateWithoutDeviceInputObjectZodSchema = makeSchema();
