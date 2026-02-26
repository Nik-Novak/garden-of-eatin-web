import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { TimeSlotCreateInputObjectSchema as TimeSlotCreateInputObjectSchema } from './TimeSlotCreateInput.schema';
import { TimeSlotUpdateManyInputObjectSchema as TimeSlotUpdateManyInputObjectSchema } from './TimeSlotUpdateManyInput.schema';
import { TimeSlotDeleteManyInputObjectSchema as TimeSlotDeleteManyInputObjectSchema } from './TimeSlotDeleteManyInput.schema'

const makeSchema = () => z.object({
  set: z.union([z.lazy(() => TimeSlotCreateInputObjectSchema), z.lazy(() => TimeSlotCreateInputObjectSchema).array()]).optional(),
  push: z.union([z.lazy(() => TimeSlotCreateInputObjectSchema), z.lazy(() => TimeSlotCreateInputObjectSchema).array()]).optional(),
  updateMany: z.lazy(() => TimeSlotUpdateManyInputObjectSchema).optional(),
  deleteMany: z.lazy(() => TimeSlotDeleteManyInputObjectSchema).optional()
}).strict();
export const TimeSlotListUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.TimeSlotListUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.TimeSlotListUpdateEnvelopeInput>;
export const TimeSlotListUpdateEnvelopeInputObjectZodSchema = makeSchema();
