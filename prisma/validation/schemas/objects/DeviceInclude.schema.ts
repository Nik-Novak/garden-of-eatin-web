import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementFindManySchema as DeviceAgreementFindManySchema } from '../findManyDeviceAgreement.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { MealInteractionFindManySchema as MealInteractionFindManySchema } from '../findManyMealInteraction.schema';
import { BugFindManySchema as BugFindManySchema } from '../findManyBug.schema';
import { ContactRequestFindManySchema as ContactRequestFindManySchema } from '../findManyContactRequest.schema';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { MealFindManySchema as MealFindManySchema } from '../findManyMeal.schema';
import { MealOccurrenceSearchFindManySchema as MealOccurrenceSearchFindManySchema } from '../findManyMealOccurrenceSearch.schema';
import { DeviceCountOutputTypeArgsObjectSchema as DeviceCountOutputTypeArgsObjectSchema } from './DeviceCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  device_agreements: z.union([z.boolean(), z.lazy(() => DeviceAgreementFindManySchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  meal_interactions: z.union([z.boolean(), z.lazy(() => MealInteractionFindManySchema)]).optional(),
  bugs: z.union([z.boolean(), z.lazy(() => BugFindManySchema)]).optional(),
  contact_requests: z.union([z.boolean(), z.lazy(() => ContactRequestFindManySchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  submitted_meals: z.union([z.boolean(), z.lazy(() => MealFindManySchema)]).optional(),
  meal_occurrence_searches: z.union([z.boolean(), z.lazy(() => MealOccurrenceSearchFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DeviceIncludeObjectSchema: z.ZodType<Prisma.DeviceInclude> = makeSchema() as unknown as z.ZodType<Prisma.DeviceInclude>;
export const DeviceIncludeObjectZodSchema = makeSchema();
