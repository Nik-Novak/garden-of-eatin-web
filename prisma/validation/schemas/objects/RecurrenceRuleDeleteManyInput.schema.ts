import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { RecurrenceRuleWhereInputObjectSchema as RecurrenceRuleWhereInputObjectSchema } from './RecurrenceRuleWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RecurrenceRuleWhereInputObjectSchema)
}).strict();
export const RecurrenceRuleDeleteManyInputObjectSchema: z.ZodType<Prisma.RecurrenceRuleDeleteManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RecurrenceRuleDeleteManyInput>;
export const RecurrenceRuleDeleteManyInputObjectZodSchema = makeSchema();
