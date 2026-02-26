import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BugCreateManyDeviceInputObjectSchema as BugCreateManyDeviceInputObjectSchema } from './BugCreateManyDeviceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BugCreateManyDeviceInputObjectSchema), z.lazy(() => BugCreateManyDeviceInputObjectSchema).array()])
}).strict();
export const BugCreateManyDeviceInputEnvelopeObjectSchema: z.ZodType<Prisma.BugCreateManyDeviceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BugCreateManyDeviceInputEnvelope>;
export const BugCreateManyDeviceInputEnvelopeObjectZodSchema = makeSchema();
