import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InteractionTypeSchema } from '../enums/InteractionType.schema';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  interaction_type: InteractionTypeSchema,
  meal_id: z.string().max(24),
  user_location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional()
}).strict();
export const MealInteractionCreateManyDeviceInputObjectSchema: z.ZodType<Prisma.MealInteractionCreateManyDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionCreateManyDeviceInput>;
export const MealInteractionCreateManyDeviceInputObjectZodSchema = makeSchema();
