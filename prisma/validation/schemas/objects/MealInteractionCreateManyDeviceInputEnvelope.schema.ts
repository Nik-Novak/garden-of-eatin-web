import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealInteractionCreateManyDeviceInputObjectSchema as MealInteractionCreateManyDeviceInputObjectSchema } from './MealInteractionCreateManyDeviceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MealInteractionCreateManyDeviceInputObjectSchema), z.lazy(() => MealInteractionCreateManyDeviceInputObjectSchema).array()])
}).strict();
export const MealInteractionCreateManyDeviceInputEnvelopeObjectSchema: z.ZodType<Prisma.MealInteractionCreateManyDeviceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionCreateManyDeviceInputEnvelope>;
export const MealInteractionCreateManyDeviceInputEnvelopeObjectZodSchema = makeSchema();
