import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealArgsObjectSchema as MealArgsObjectSchema } from './MealArgs.schema'

const makeSchema = () => z.object({
  meal: z.union([z.boolean(), z.lazy(() => MealArgsObjectSchema)]).optional()
}).strict();
export const MealOccurrenceIncludeObjectSchema: z.ZodType<Prisma.MealOccurrenceInclude> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceInclude>;
export const MealOccurrenceIncludeObjectZodSchema = makeSchema();
