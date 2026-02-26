import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ReviewCreateManyDeviceInputObjectSchema as ReviewCreateManyDeviceInputObjectSchema } from './ReviewCreateManyDeviceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReviewCreateManyDeviceInputObjectSchema), z.lazy(() => ReviewCreateManyDeviceInputObjectSchema).array()])
}).strict();
export const ReviewCreateManyDeviceInputEnvelopeObjectSchema: z.ZodType<Prisma.ReviewCreateManyDeviceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyDeviceInputEnvelope>;
export const ReviewCreateManyDeviceInputEnvelopeObjectZodSchema = makeSchema();
