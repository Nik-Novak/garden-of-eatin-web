import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceMetadataObjectEqualityInputObjectSchema as WebDeviceMetadataObjectEqualityInputObjectSchema } from './WebDeviceMetadataObjectEqualityInput.schema';
import { WebDeviceMetadataWhereInputObjectSchema as WebDeviceMetadataWhereInputObjectSchema } from './WebDeviceMetadataWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => WebDeviceMetadataObjectEqualityInputObjectSchema).optional().nullable(),
  is: z.lazy(() => WebDeviceMetadataWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => WebDeviceMetadataWhereInputObjectSchema).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const WebDeviceMetadataNullableCompositeFilterObjectSchema: z.ZodType<Prisma.WebDeviceMetadataNullableCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceMetadataNullableCompositeFilter>;
export const WebDeviceMetadataNullableCompositeFilterObjectZodSchema = makeSchema();
