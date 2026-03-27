import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceMetadataObjectEqualityInputObjectSchema as DeviceMetadataObjectEqualityInputObjectSchema } from './DeviceMetadataObjectEqualityInput.schema';
import { DeviceMetadataWhereInputObjectSchema as DeviceMetadataWhereInputObjectSchema } from './DeviceMetadataWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => DeviceMetadataObjectEqualityInputObjectSchema).optional().nullable(),
  is: z.lazy(() => DeviceMetadataWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => DeviceMetadataWhereInputObjectSchema).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const DeviceMetadataNullableCompositeFilterObjectSchema: z.ZodType<Prisma.DeviceMetadataNullableCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.DeviceMetadataNullableCompositeFilter>;
export const DeviceMetadataNullableCompositeFilterObjectZodSchema = makeSchema();
