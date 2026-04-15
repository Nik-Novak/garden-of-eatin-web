import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumInteractionTypeFilterObjectSchema as EnumInteractionTypeFilterObjectSchema } from './EnumInteractionTypeFilter.schema';
import { InteractionTypeSchema } from '../enums/InteractionType.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const resourceinteractionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ResourceInteractionScalarWhereInputObjectSchema), z.lazy(() => ResourceInteractionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResourceInteractionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResourceInteractionScalarWhereInputObjectSchema), z.lazy(() => ResourceInteractionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  interaction_type: z.union([z.lazy(() => EnumInteractionTypeFilterObjectSchema), InteractionTypeSchema]).optional(),
  resource_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  device_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ResourceInteractionScalarWhereInputObjectSchema: z.ZodType<Prisma.ResourceInteractionScalarWhereInput> = resourceinteractionscalarwhereinputSchema as unknown as z.ZodType<Prisma.ResourceInteractionScalarWhereInput>;
export const ResourceInteractionScalarWhereInputObjectZodSchema = resourceinteractionscalarwhereinputSchema;
