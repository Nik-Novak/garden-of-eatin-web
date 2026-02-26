import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { InviteStatusSchema } from '../enums/InviteStatus.schema';
import { NestedEnumInviteStatusFilterObjectSchema as NestedEnumInviteStatusFilterObjectSchema } from './NestedEnumInviteStatusFilter.schema'

const makeSchema = () => z.object({
  equals: InviteStatusSchema.optional(),
  in: InviteStatusSchema.array().optional(),
  notIn: InviteStatusSchema.array().optional(),
  not: z.union([InviteStatusSchema, z.lazy(() => NestedEnumInviteStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumInviteStatusFilterObjectSchema: z.ZodType<Prisma.EnumInviteStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumInviteStatusFilter>;
export const EnumInviteStatusFilterObjectZodSchema = makeSchema();
