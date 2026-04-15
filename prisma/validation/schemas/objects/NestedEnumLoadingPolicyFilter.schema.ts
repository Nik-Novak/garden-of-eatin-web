import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LoadingPolicySchema } from '../enums/LoadingPolicy.schema'

const nestedenumloadingpolicyfilterSchema = z.object({
  equals: LoadingPolicySchema.optional(),
  in: LoadingPolicySchema.array().optional(),
  notIn: LoadingPolicySchema.array().optional(),
  not: z.union([LoadingPolicySchema, z.lazy(() => NestedEnumLoadingPolicyFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumLoadingPolicyFilterObjectSchema: z.ZodType<Prisma.NestedEnumLoadingPolicyFilter> = nestedenumloadingpolicyfilterSchema as unknown as z.ZodType<Prisma.NestedEnumLoadingPolicyFilter>;
export const NestedEnumLoadingPolicyFilterObjectZodSchema = nestedenumloadingpolicyfilterSchema;
