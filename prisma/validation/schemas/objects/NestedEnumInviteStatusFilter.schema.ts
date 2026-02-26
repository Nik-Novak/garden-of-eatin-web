import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { InviteStatusSchema } from '../enums/InviteStatus.schema'

const nestedenuminvitestatusfilterSchema = z.object({
  equals: InviteStatusSchema.optional(),
  in: InviteStatusSchema.array().optional(),
  notIn: InviteStatusSchema.array().optional(),
  not: z.union([InviteStatusSchema, z.lazy(() => NestedEnumInviteStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumInviteStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumInviteStatusFilter> = nestedenuminvitestatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumInviteStatusFilter>;
export const NestedEnumInviteStatusFilterObjectZodSchema = nestedenuminvitestatusfilterSchema;
