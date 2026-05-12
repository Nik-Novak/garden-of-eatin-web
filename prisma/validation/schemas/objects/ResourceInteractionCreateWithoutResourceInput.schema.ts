import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InteractionTypeSchema } from '../enums/InteractionType.schema';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { DeviceCreateNestedOneWithoutResource_interactionsInputObjectSchema as DeviceCreateNestedOneWithoutResource_interactionsInputObjectSchema } from './DeviceCreateNestedOneWithoutResource_interactionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  interaction_type: InteractionTypeSchema,
  user_location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  device: z.lazy(() => DeviceCreateNestedOneWithoutResource_interactionsInputObjectSchema)
}).strict();
export const ResourceInteractionCreateWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceInteractionCreateWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionCreateWithoutResourceInput>;
export const ResourceInteractionCreateWithoutResourceInputObjectZodSchema = makeSchema();
