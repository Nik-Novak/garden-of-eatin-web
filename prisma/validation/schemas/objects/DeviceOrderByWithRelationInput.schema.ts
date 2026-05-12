import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DeviceMetadataOrderByInputObjectSchema as DeviceMetadataOrderByInputObjectSchema } from './DeviceMetadataOrderByInput.schema';
import { DeviceSettingsOrderByInputObjectSchema as DeviceSettingsOrderByInputObjectSchema } from './DeviceSettingsOrderByInput.schema';
import { WebDeviceOrderByRelationAggregateInputObjectSchema as WebDeviceOrderByRelationAggregateInputObjectSchema } from './WebDeviceOrderByRelationAggregateInput.schema';
import { DeviceAgreementOrderByRelationAggregateInputObjectSchema as DeviceAgreementOrderByRelationAggregateInputObjectSchema } from './DeviceAgreementOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { BugOrderByRelationAggregateInputObjectSchema as BugOrderByRelationAggregateInputObjectSchema } from './BugOrderByRelationAggregateInput.schema';
import { ContactRequestOrderByRelationAggregateInputObjectSchema as ContactRequestOrderByRelationAggregateInputObjectSchema } from './ContactRequestOrderByRelationAggregateInput.schema';
import { QRScanOrderByRelationAggregateInputObjectSchema as QRScanOrderByRelationAggregateInputObjectSchema } from './QRScanOrderByRelationAggregateInput.schema';
import { ReviewOrderByRelationAggregateInputObjectSchema as ReviewOrderByRelationAggregateInputObjectSchema } from './ReviewOrderByRelationAggregateInput.schema';
import { MealOrderByRelationAggregateInputObjectSchema as MealOrderByRelationAggregateInputObjectSchema } from './MealOrderByRelationAggregateInput.schema';
import { MealOccurrenceSearchOrderByRelationAggregateInputObjectSchema as MealOccurrenceSearchOrderByRelationAggregateInputObjectSchema } from './MealOccurrenceSearchOrderByRelationAggregateInput.schema';
import { MealInteractionOrderByRelationAggregateInputObjectSchema as MealInteractionOrderByRelationAggregateInputObjectSchema } from './MealInteractionOrderByRelationAggregateInput.schema';
import { ResourceOrderByRelationAggregateInputObjectSchema as ResourceOrderByRelationAggregateInputObjectSchema } from './ResourceOrderByRelationAggregateInput.schema';
import { ResourceOccurrenceSearchOrderByRelationAggregateInputObjectSchema as ResourceOccurrenceSearchOrderByRelationAggregateInputObjectSchema } from './ResourceOccurrenceSearchOrderByRelationAggregateInput.schema';
import { ResourceInteractionOrderByRelationAggregateInputObjectSchema as ResourceInteractionOrderByRelationAggregateInputObjectSchema } from './ResourceInteractionOrderByRelationAggregateInput.schema';
import { ScannableDocumentOrderByRelationAggregateInputObjectSchema as ScannableDocumentOrderByRelationAggregateInputObjectSchema } from './ScannableDocumentOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  uuid: SortOrderSchema.optional(),
  metadata: z.lazy(() => DeviceMetadataOrderByInputObjectSchema).optional(),
  settings: z.lazy(() => DeviceSettingsOrderByInputObjectSchema).optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  web_devices: z.lazy(() => WebDeviceOrderByRelationAggregateInputObjectSchema).optional(),
  device_agreements: z.lazy(() => DeviceAgreementOrderByRelationAggregateInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  bugs: z.lazy(() => BugOrderByRelationAggregateInputObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestOrderByRelationAggregateInputObjectSchema).optional(),
  qr_scans: z.lazy(() => QRScanOrderByRelationAggregateInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewOrderByRelationAggregateInputObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealOrderByRelationAggregateInputObjectSchema).optional(),
  meal_occurrence_searches: z.lazy(() => MealOccurrenceSearchOrderByRelationAggregateInputObjectSchema).optional(),
  meal_interactions: z.lazy(() => MealInteractionOrderByRelationAggregateInputObjectSchema).optional(),
  submitted_resources: z.lazy(() => ResourceOrderByRelationAggregateInputObjectSchema).optional(),
  resource_occurrence_searches: z.lazy(() => ResourceOccurrenceSearchOrderByRelationAggregateInputObjectSchema).optional(),
  resource_interactions: z.lazy(() => ResourceInteractionOrderByRelationAggregateInputObjectSchema).optional(),
  scannable_documents: z.lazy(() => ScannableDocumentOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const DeviceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DeviceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceOrderByWithRelationInput>;
export const DeviceOrderByWithRelationInputObjectZodSchema = makeSchema();
