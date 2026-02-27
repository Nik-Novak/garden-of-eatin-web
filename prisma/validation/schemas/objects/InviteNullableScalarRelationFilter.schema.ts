import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InviteWhereInputObjectSchema as InviteWhereInputObjectSchema } from './InviteWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => InviteWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => InviteWhereInputObjectSchema).optional().nullable()
}).strict();
export const InviteNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.InviteNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.InviteNullableScalarRelationFilter>;
export const InviteNullableScalarRelationFilterObjectZodSchema = makeSchema();
