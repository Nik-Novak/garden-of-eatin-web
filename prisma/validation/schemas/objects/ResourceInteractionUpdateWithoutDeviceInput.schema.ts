import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InteractionTypeSchema } from '../enums/InteractionType.schema';
import { EnumInteractionTypeFieldUpdateOperationsInputObjectSchema as EnumInteractionTypeFieldUpdateOperationsInputObjectSchema } from './EnumInteractionTypeFieldUpdateOperationsInput.schema';
import { PointUpdateEnvelopeInputObjectSchema as PointUpdateEnvelopeInputObjectSchema } from './PointUpdateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ResourceUpdateOneRequiredWithoutResource_interactionsNestedInputObjectSchema as ResourceUpdateOneRequiredWithoutResource_interactionsNestedInputObjectSchema } from './ResourceUpdateOneRequiredWithoutResource_interactionsNestedInput.schema'

const makeSchema = () => z.object({
  interaction_type: z.union([InteractionTypeSchema, z.lazy(() => EnumInteractionTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_location: z.union([z.lazy(() => PointUpdateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.lazy(() => ResourceUpdateOneRequiredWithoutResource_interactionsNestedInputObjectSchema).optional()
}).strict();
export const ResourceInteractionUpdateWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ResourceInteractionUpdateWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionUpdateWithoutDeviceInput>;
export const ResourceInteractionUpdateWithoutDeviceInputObjectZodSchema = makeSchema();
