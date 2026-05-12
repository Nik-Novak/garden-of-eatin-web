import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LoadingPolicySchema } from '../enums/LoadingPolicy.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumLoadingPolicyFilterObjectSchema as NestedEnumLoadingPolicyFilterObjectSchema } from './NestedEnumLoadingPolicyFilter.schema'

const nestedenumloadingpolicywithaggregatesfilterSchema = z.object({
  equals: LoadingPolicySchema.optional(),
  in: LoadingPolicySchema.array().optional(),
  notIn: LoadingPolicySchema.array().optional(),
  not: z.union([LoadingPolicySchema, z.lazy(() => NestedEnumLoadingPolicyWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumLoadingPolicyFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumLoadingPolicyFilterObjectSchema).optional()
}).strict();
export const NestedEnumLoadingPolicyWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumLoadingPolicyWithAggregatesFilter> = nestedenumloadingpolicywithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumLoadingPolicyWithAggregatesFilter>;
export const NestedEnumLoadingPolicyWithAggregatesFilterObjectZodSchema = nestedenumloadingpolicywithaggregatesfilterSchema;
