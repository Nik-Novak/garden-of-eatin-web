import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RecurrenceRuleWhereInputObjectSchema as RecurrenceRuleWhereInputObjectSchema } from './RecurrenceRuleWhereInput.schema';
import { RecurrenceRuleUpdateInputObjectSchema as RecurrenceRuleUpdateInputObjectSchema } from './RecurrenceRuleUpdateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RecurrenceRuleWhereInputObjectSchema),
  data: z.lazy(() => RecurrenceRuleUpdateInputObjectSchema)
}).strict();
export const RecurrenceRuleUpdateManyInputObjectSchema: z.ZodType<Prisma.RecurrenceRuleUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RecurrenceRuleUpdateManyInput>;
export const RecurrenceRuleUpdateManyInputObjectZodSchema = makeSchema();
