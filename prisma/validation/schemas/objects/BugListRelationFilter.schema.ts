import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { BugWhereInputObjectSchema as BugWhereInputObjectSchema } from './BugWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => BugWhereInputObjectSchema).optional(),
  some: z.lazy(() => BugWhereInputObjectSchema).optional(),
  none: z.lazy(() => BugWhereInputObjectSchema).optional()
}).strict();
export const BugListRelationFilterObjectSchema: z.ZodType<Prisma.BugListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BugListRelationFilter>;
export const BugListRelationFilterObjectZodSchema = makeSchema();
