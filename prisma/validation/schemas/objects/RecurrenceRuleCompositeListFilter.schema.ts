import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RecurrenceRuleObjectEqualityInputObjectSchema as RecurrenceRuleObjectEqualityInputObjectSchema } from './RecurrenceRuleObjectEqualityInput.schema';
import { RecurrenceRuleWhereInputObjectSchema as RecurrenceRuleWhereInputObjectSchema } from './RecurrenceRuleWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => RecurrenceRuleObjectEqualityInputObjectSchema).array().optional(),
  every: z.lazy(() => RecurrenceRuleWhereInputObjectSchema).optional(),
  some: z.lazy(() => RecurrenceRuleWhereInputObjectSchema).optional(),
  none: z.lazy(() => RecurrenceRuleWhereInputObjectSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();
export const RecurrenceRuleCompositeListFilterObjectSchema: z.ZodType<Prisma.RecurrenceRuleCompositeListFilter> = makeSchema() as unknown as z.ZodType<Prisma.RecurrenceRuleCompositeListFilter>;
export const RecurrenceRuleCompositeListFilterObjectZodSchema = makeSchema();
