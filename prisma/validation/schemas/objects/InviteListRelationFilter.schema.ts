import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InviteWhereInputObjectSchema as InviteWhereInputObjectSchema } from './InviteWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => InviteWhereInputObjectSchema).optional(),
  some: z.lazy(() => InviteWhereInputObjectSchema).optional(),
  none: z.lazy(() => InviteWhereInputObjectSchema).optional()
}).strict();
export const InviteListRelationFilterObjectSchema: z.ZodType<Prisma.InviteListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.InviteListRelationFilter>;
export const InviteListRelationFilterObjectZodSchema = makeSchema();
