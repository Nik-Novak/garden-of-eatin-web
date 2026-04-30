import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactRequestCreateManyWeb_deviceInputObjectSchema as ContactRequestCreateManyWeb_deviceInputObjectSchema } from './ContactRequestCreateManyWeb_deviceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ContactRequestCreateManyWeb_deviceInputObjectSchema), z.lazy(() => ContactRequestCreateManyWeb_deviceInputObjectSchema).array()])
}).strict();
export const ContactRequestCreateManyWeb_deviceInputEnvelopeObjectSchema: z.ZodType<Prisma.ContactRequestCreateManyWeb_deviceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestCreateManyWeb_deviceInputEnvelope>;
export const ContactRequestCreateManyWeb_deviceInputEnvelopeObjectZodSchema = makeSchema();
