import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScheduleTypeSchema } from '../enums/ScheduleType.schema'

const nestedenumscheduletypefilterSchema = z.object({
  equals: ScheduleTypeSchema.optional(),
  in: ScheduleTypeSchema.array().optional(),
  notIn: ScheduleTypeSchema.array().optional(),
  not: z.union([ScheduleTypeSchema, z.lazy(() => NestedEnumScheduleTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumScheduleTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumScheduleTypeFilter> = nestedenumscheduletypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumScheduleTypeFilter>;
export const NestedEnumScheduleTypeFilterObjectZodSchema = nestedenumscheduletypefilterSchema;
