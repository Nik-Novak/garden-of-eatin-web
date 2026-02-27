import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DeviceSettingsOrderByInputObjectSchema as DeviceSettingsOrderByInputObjectSchema } from './DeviceSettingsOrderByInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { BugOrderByRelationAggregateInputObjectSchema as BugOrderByRelationAggregateInputObjectSchema } from './BugOrderByRelationAggregateInput.schema';
import { ContactRequestOrderByRelationAggregateInputObjectSchema as ContactRequestOrderByRelationAggregateInputObjectSchema } from './ContactRequestOrderByRelationAggregateInput.schema';
import { ReviewOrderByRelationAggregateInputObjectSchema as ReviewOrderByRelationAggregateInputObjectSchema } from './ReviewOrderByRelationAggregateInput.schema';
import { MealOrderByRelationAggregateInputObjectSchema as MealOrderByRelationAggregateInputObjectSchema } from './MealOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  uuid: SortOrderSchema.optional(),
  settings: z.lazy(() => DeviceSettingsOrderByInputObjectSchema).optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  bugs: z.lazy(() => BugOrderByRelationAggregateInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestOrderByRelationAggregateInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewOrderByRelationAggregateInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const DeviceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DeviceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceOrderByWithRelationInput>;
export const DeviceOrderByWithRelationInputObjectZodSchema = makeSchema();
