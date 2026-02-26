import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { InviteStatusSchema } from '../enums/InviteStatus.schema';
import { NestedEnumInviteStatusWithAggregatesFilterObjectSchema as NestedEnumInviteStatusWithAggregatesFilterObjectSchema } from './NestedEnumInviteStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumInviteStatusFilterObjectSchema as NestedEnumInviteStatusFilterObjectSchema } from './NestedEnumInviteStatusFilter.schema'

const makeSchema = () => z.object({
  equals: InviteStatusSchema.optional(),
  in: InviteStatusSchema.array().optional(),
  notIn: InviteStatusSchema.array().optional(),
  not: z.union([InviteStatusSchema, z.lazy(() => NestedEnumInviteStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumInviteStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumInviteStatusFilterObjectSchema).optional()
}).strict();
export const EnumInviteStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumInviteStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumInviteStatusWithAggregatesFilter>;
export const EnumInviteStatusWithAggregatesFilterObjectZodSchema = makeSchema();
