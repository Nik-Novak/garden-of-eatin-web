import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { BugFindManySchema as BugFindManySchema } from '../findManyBug.schema';
import { ContactRequestFindManySchema as ContactRequestFindManySchema } from '../findManyContactRequest.schema';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { MealFindManySchema as MealFindManySchema } from '../findManyMeal.schema';
import { DeviceCountOutputTypeArgsObjectSchema as DeviceCountOutputTypeArgsObjectSchema } from './DeviceCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  settings: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  user_id: z.boolean().optional(),
  bugs: z.union([z.boolean(), z.lazy(() => BugFindManySchema)]).optional(),
  contact_requests: z.union([z.boolean(), z.lazy(() => ContactRequestFindManySchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  submitted_meals: z.union([z.boolean(), z.lazy(() => MealFindManySchema)]).optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => DeviceCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DeviceSelectObjectSchema: z.ZodType<Prisma.DeviceSelect> = makeSchema() as unknown as z.ZodType<Prisma.DeviceSelect>;
export const DeviceSelectObjectZodSchema = makeSchema();
