import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LoadingPolicySchema } from '../enums/LoadingPolicy.schema';
import { NestedEnumLoadingPolicyFilterObjectSchema as NestedEnumLoadingPolicyFilterObjectSchema } from './NestedEnumLoadingPolicyFilter.schema'

const makeSchema = () => z.object({
  equals: LoadingPolicySchema.optional(),
  in: LoadingPolicySchema.array().optional(),
  notIn: LoadingPolicySchema.array().optional(),
  not: z.union([LoadingPolicySchema, z.lazy(() => NestedEnumLoadingPolicyFilterObjectSchema)]).optional()
}).strict();
export const EnumLoadingPolicyFilterObjectSchema: z.ZodType<Prisma.EnumLoadingPolicyFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumLoadingPolicyFilter>;
export const EnumLoadingPolicyFilterObjectZodSchema = makeSchema();
