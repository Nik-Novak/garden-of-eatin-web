import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RecurrenceRuleCreateInputObjectSchema as RecurrenceRuleCreateInputObjectSchema } from './RecurrenceRuleCreateInput.schema';
import { RecurrenceRuleUpdateManyInputObjectSchema as RecurrenceRuleUpdateManyInputObjectSchema } from './RecurrenceRuleUpdateManyInput.schema';
import { RecurrenceRuleDeleteManyInputObjectSchema as RecurrenceRuleDeleteManyInputObjectSchema } from './RecurrenceRuleDeleteManyInput.schema'

const makeSchema = () => z.object({
  set: z.union([z.lazy(() => RecurrenceRuleCreateInputObjectSchema), z.lazy(() => RecurrenceRuleCreateInputObjectSchema).array()]).optional(),
  push: z.union([z.lazy(() => RecurrenceRuleCreateInputObjectSchema), z.lazy(() => RecurrenceRuleCreateInputObjectSchema).array()]).optional(),
  updateMany: z.lazy(() => RecurrenceRuleUpdateManyInputObjectSchema).optional(),
  deleteMany: z.lazy(() => RecurrenceRuleDeleteManyInputObjectSchema).optional()
}).strict();
export const RecurrenceRuleListUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.RecurrenceRuleListUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.RecurrenceRuleListUpdateEnvelopeInput>;
export const RecurrenceRuleListUpdateEnvelopeInputObjectZodSchema = makeSchema();
