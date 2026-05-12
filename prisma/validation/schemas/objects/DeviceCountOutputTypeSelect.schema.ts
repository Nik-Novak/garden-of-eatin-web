import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCountOutputTypeCountWebDevicesArgsObjectSchema as DeviceCountOutputTypeCountWebDevicesArgsObjectSchema } from './DeviceCountOutputTypeCountWebDevicesArgs.schema';
import { DeviceCountOutputTypeCountDeviceAgreementsArgsObjectSchema as DeviceCountOutputTypeCountDeviceAgreementsArgsObjectSchema } from './DeviceCountOutputTypeCountDeviceAgreementsArgs.schema';
import { DeviceCountOutputTypeCountBugsArgsObjectSchema as DeviceCountOutputTypeCountBugsArgsObjectSchema } from './DeviceCountOutputTypeCountBugsArgs.schema';
import { DeviceCountOutputTypeCountContactRequestsArgsObjectSchema as DeviceCountOutputTypeCountContactRequestsArgsObjectSchema } from './DeviceCountOutputTypeCountContactRequestsArgs.schema';
import { DeviceCountOutputTypeCountQrScansArgsObjectSchema as DeviceCountOutputTypeCountQrScansArgsObjectSchema } from './DeviceCountOutputTypeCountQrScansArgs.schema';
import { DeviceCountOutputTypeCountReviewsArgsObjectSchema as DeviceCountOutputTypeCountReviewsArgsObjectSchema } from './DeviceCountOutputTypeCountReviewsArgs.schema';
import { DeviceCountOutputTypeCountSubmittedMealsArgsObjectSchema as DeviceCountOutputTypeCountSubmittedMealsArgsObjectSchema } from './DeviceCountOutputTypeCountSubmittedMealsArgs.schema';
import { DeviceCountOutputTypeCountMealOccurrenceSearchesArgsObjectSchema as DeviceCountOutputTypeCountMealOccurrenceSearchesArgsObjectSchema } from './DeviceCountOutputTypeCountMealOccurrenceSearchesArgs.schema';
import { DeviceCountOutputTypeCountMealInteractionsArgsObjectSchema as DeviceCountOutputTypeCountMealInteractionsArgsObjectSchema } from './DeviceCountOutputTypeCountMealInteractionsArgs.schema';
import { DeviceCountOutputTypeCountSubmittedResourcesArgsObjectSchema as DeviceCountOutputTypeCountSubmittedResourcesArgsObjectSchema } from './DeviceCountOutputTypeCountSubmittedResourcesArgs.schema';
import { DeviceCountOutputTypeCountResourceOccurrenceSearchesArgsObjectSchema as DeviceCountOutputTypeCountResourceOccurrenceSearchesArgsObjectSchema } from './DeviceCountOutputTypeCountResourceOccurrenceSearchesArgs.schema';
import { DeviceCountOutputTypeCountResourceInteractionsArgsObjectSchema as DeviceCountOutputTypeCountResourceInteractionsArgsObjectSchema } from './DeviceCountOutputTypeCountResourceInteractionsArgs.schema';
import { DeviceCountOutputTypeCountScannableDocumentsArgsObjectSchema as DeviceCountOutputTypeCountScannableDocumentsArgsObjectSchema } from './DeviceCountOutputTypeCountScannableDocumentsArgs.schema'

const makeSchema = () => z.object({
  web_devices: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountWebDevicesArgsObjectSchema)]).optional(),
  device_agreements: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountDeviceAgreementsArgsObjectSchema)]).optional(),
  bugs: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountBugsArgsObjectSchema)]).optional(),
  contact_requests: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountContactRequestsArgsObjectSchema)]).optional(),
  qr_scans: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountQrScansArgsObjectSchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountReviewsArgsObjectSchema)]).optional(),
  submitted_meals: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountSubmittedMealsArgsObjectSchema)]).optional(),
  meal_occurrence_searches: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountMealOccurrenceSearchesArgsObjectSchema)]).optional(),
  meal_interactions: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountMealInteractionsArgsObjectSchema)]).optional(),
  submitted_resources: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountSubmittedResourcesArgsObjectSchema)]).optional(),
  resource_occurrence_searches: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountResourceOccurrenceSearchesArgsObjectSchema)]).optional(),
  resource_interactions: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountResourceInteractionsArgsObjectSchema)]).optional(),
  scannable_documents: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountScannableDocumentsArgsObjectSchema)]).optional()
}).strict();
export const DeviceCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DeviceCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCountOutputTypeSelect>;
export const DeviceCountOutputTypeSelectObjectZodSchema = makeSchema();
