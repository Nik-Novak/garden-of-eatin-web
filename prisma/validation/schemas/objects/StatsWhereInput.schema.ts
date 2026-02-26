import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const statswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StatsWhereInputObjectSchema), z.lazy(() => StatsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StatsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StatsWhereInputObjectSchema), z.lazy(() => StatsWhereInputObjectSchema).array()]).optional(),
  views: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  navigations: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const StatsWhereInputObjectSchema: z.ZodType<Prisma.StatsWhereInput> = statswhereinputSchema as unknown as z.ZodType<Prisma.StatsWhereInput>;
export const StatsWhereInputObjectZodSchema = statswhereinputSchema;
