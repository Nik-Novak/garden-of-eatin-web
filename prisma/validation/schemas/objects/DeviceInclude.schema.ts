import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { BugFindManySchema as BugFindManySchema } from '../findManyBug.schema';
import { ContactRequestFindManySchema as ContactRequestFindManySchema } from '../findManyContactRequest.schema';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { MealFindManySchema as MealFindManySchema } from '../findManyMeal.schema';
import { DeviceCountOutputTypeArgsObjectSchema as DeviceCountOutputTypeArgsObjectSchema } from './DeviceCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  bugs: z.union([z.boolean(), z.lazy(() => BugFindManySchema)]).optional(),
  contact_requests: z.union([z.boolean(), z.lazy(() => ContactRequestFindManySchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  submitted_meals: z.union([z.boolean(), z.lazy(() => MealFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DeviceIncludeObjectSchema: z.ZodType<Prisma.DeviceInclude> = makeSchema() as unknown as z.ZodType<Prisma.DeviceInclude>;
export const DeviceIncludeObjectZodSchema = makeSchema();
