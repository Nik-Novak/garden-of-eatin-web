import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ScheduleTypeSchema } from '../enums/ScheduleType.schema';
import { NestedEnumScheduleTypeFilterObjectSchema as NestedEnumScheduleTypeFilterObjectSchema } from './NestedEnumScheduleTypeFilter.schema'

const makeSchema = () => z.object({
  equals: ScheduleTypeSchema.optional(),
  in: ScheduleTypeSchema.array().optional(),
  notIn: ScheduleTypeSchema.array().optional(),
  not: z.union([ScheduleTypeSchema, z.lazy(() => NestedEnumScheduleTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumScheduleTypeFilterObjectSchema: z.ZodType<Prisma.EnumScheduleTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumScheduleTypeFilter>;
export const EnumScheduleTypeFilterObjectZodSchema = makeSchema();
