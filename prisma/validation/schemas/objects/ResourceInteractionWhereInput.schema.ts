import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumInteractionTypeFilterObjectSchema as EnumInteractionTypeFilterObjectSchema } from './EnumInteractionTypeFilter.schema';
import { InteractionTypeSchema } from '../enums/InteractionType.schema';
import { PointCompositeFilterObjectSchema as PointCompositeFilterObjectSchema } from './PointCompositeFilter.schema';
import { PointObjectEqualityInputObjectSchema as PointObjectEqualityInputObjectSchema } from './PointObjectEqualityInput.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ResourceScalarRelationFilterObjectSchema as ResourceScalarRelationFilterObjectSchema } from './ResourceScalarRelationFilter.schema';
import { ResourceWhereInputObjectSchema as ResourceWhereInputObjectSchema } from './ResourceWhereInput.schema';
import { DeviceScalarRelationFilterObjectSchema as DeviceScalarRelationFilterObjectSchema } from './DeviceScalarRelationFilter.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const resourceinteractionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ResourceInteractionWhereInputObjectSchema), z.lazy(() => ResourceInteractionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResourceInteractionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResourceInteractionWhereInputObjectSchema), z.lazy(() => ResourceInteractionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  interaction_type: z.union([z.lazy(() => EnumInteractionTypeFilterObjectSchema), InteractionTypeSchema]).optional(),
  resource_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  device_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  user_location: z.union([z.lazy(() => PointCompositeFilterObjectSchema), z.lazy(() => PointObjectEqualityInputObjectSchema)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  resource: z.union([z.lazy(() => ResourceScalarRelationFilterObjectSchema), z.lazy(() => ResourceWhereInputObjectSchema)]).optional(),
  device: z.union([z.lazy(() => DeviceScalarRelationFilterObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema)]).optional()
}).strict();
export const ResourceInteractionWhereInputObjectSchema: z.ZodType<Prisma.ResourceInteractionWhereInput> = resourceinteractionwhereinputSchema as unknown as z.ZodType<Prisma.ResourceInteractionWhereInput>;
export const ResourceInteractionWhereInputObjectZodSchema = resourceinteractionwhereinputSchema;
