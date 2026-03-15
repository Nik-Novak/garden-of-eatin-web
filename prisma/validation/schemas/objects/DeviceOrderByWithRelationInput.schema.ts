import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DeviceHardwareOrderByInputObjectSchema as DeviceHardwareOrderByInputObjectSchema } from './DeviceHardwareOrderByInput.schema';
import { DeviceSettingsOrderByInputObjectSchema as DeviceSettingsOrderByInputObjectSchema } from './DeviceSettingsOrderByInput.schema';
import { DeviceAgreementOrderByRelationAggregateInputObjectSchema as DeviceAgreementOrderByRelationAggregateInputObjectSchema } from './DeviceAgreementOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { MealInteractionOrderByRelationAggregateInputObjectSchema as MealInteractionOrderByRelationAggregateInputObjectSchema } from './MealInteractionOrderByRelationAggregateInput.schema';
import { BugOrderByRelationAggregateInputObjectSchema as BugOrderByRelationAggregateInputObjectSchema } from './BugOrderByRelationAggregateInput.schema';
import { ContactRequestOrderByRelationAggregateInputObjectSchema as ContactRequestOrderByRelationAggregateInputObjectSchema } from './ContactRequestOrderByRelationAggregateInput.schema';
import { ReviewOrderByRelationAggregateInputObjectSchema as ReviewOrderByRelationAggregateInputObjectSchema } from './ReviewOrderByRelationAggregateInput.schema';
import { MealOrderByRelationAggregateInputObjectSchema as MealOrderByRelationAggregateInputObjectSchema } from './MealOrderByRelationAggregateInput.schema';
import { MealOccurrenceSearchOrderByRelationAggregateInputObjectSchema as MealOccurrenceSearchOrderByRelationAggregateInputObjectSchema } from './MealOccurrenceSearchOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  uuid: SortOrderSchema.optional(),
  hardware: z.lazy(() => DeviceHardwareOrderByInputObjectSchema).optional(),
  settings: z.lazy(() => DeviceSettingsOrderByInputObjectSchema).optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  device_agreements: z.lazy(() => DeviceAgreementOrderByRelationAggregateInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  meal_interactions: z.lazy(() => MealInteractionOrderByRelationAggregateInputObjectSchema).optional(),
  bugs: z.lazy(() => BugOrderByRelationAggregateInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestOrderByRelationAggregateInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewOrderByRelationAggregateInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealOrderByRelationAggregateInputObjectSchema).optional(),
  meal_occurrence_searches: z.lazy(() => MealOccurrenceSearchOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const DeviceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DeviceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceOrderByWithRelationInput>;
export const DeviceOrderByWithRelationInputObjectZodSchema = makeSchema();
