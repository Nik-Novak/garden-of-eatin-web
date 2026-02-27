import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCountOutputTypeCountBugsArgsObjectSchema as DeviceCountOutputTypeCountBugsArgsObjectSchema } from './DeviceCountOutputTypeCountBugsArgs.schema';
import { DeviceCountOutputTypeCountContactRequestsArgsObjectSchema as DeviceCountOutputTypeCountContactRequestsArgsObjectSchema } from './DeviceCountOutputTypeCountContactRequestsArgs.schema';
import { DeviceCountOutputTypeCountReviewsArgsObjectSchema as DeviceCountOutputTypeCountReviewsArgsObjectSchema } from './DeviceCountOutputTypeCountReviewsArgs.schema';
import { DeviceCountOutputTypeCountSubmittedMealsArgsObjectSchema as DeviceCountOutputTypeCountSubmittedMealsArgsObjectSchema } from './DeviceCountOutputTypeCountSubmittedMealsArgs.schema'

const makeSchema = () => z.object({
  bugs: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountBugsArgsObjectSchema)]).optional(),
  contact_requests: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountContactRequestsArgsObjectSchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountReviewsArgsObjectSchema)]).optional(),
  submitted_meals: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeCountSubmittedMealsArgsObjectSchema)]).optional()
}).strict();
export const DeviceCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DeviceCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCountOutputTypeSelect>;
export const DeviceCountOutputTypeSelectObjectZodSchema = makeSchema();
