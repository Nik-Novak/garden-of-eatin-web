import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ContactRequestCreateManyDeviceInputObjectSchema as ContactRequestCreateManyDeviceInputObjectSchema } from './ContactRequestCreateManyDeviceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ContactRequestCreateManyDeviceInputObjectSchema), z.lazy(() => ContactRequestCreateManyDeviceInputObjectSchema).array()])
}).strict();
export const ContactRequestCreateManyDeviceInputEnvelopeObjectSchema: z.ZodType<Prisma.ContactRequestCreateManyDeviceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestCreateManyDeviceInputEnvelope>;
export const ContactRequestCreateManyDeviceInputEnvelopeObjectZodSchema = makeSchema();
