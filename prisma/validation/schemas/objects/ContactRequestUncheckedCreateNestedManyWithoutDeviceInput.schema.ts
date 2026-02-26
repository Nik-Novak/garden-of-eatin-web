import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ContactRequestCreateWithoutDeviceInputObjectSchema as ContactRequestCreateWithoutDeviceInputObjectSchema } from './ContactRequestCreateWithoutDeviceInput.schema';
import { ContactRequestUncheckedCreateWithoutDeviceInputObjectSchema as ContactRequestUncheckedCreateWithoutDeviceInputObjectSchema } from './ContactRequestUncheckedCreateWithoutDeviceInput.schema';
import { ContactRequestCreateOrConnectWithoutDeviceInputObjectSchema as ContactRequestCreateOrConnectWithoutDeviceInputObjectSchema } from './ContactRequestCreateOrConnectWithoutDeviceInput.schema';
import { ContactRequestCreateManyDeviceInputEnvelopeObjectSchema as ContactRequestCreateManyDeviceInputEnvelopeObjectSchema } from './ContactRequestCreateManyDeviceInputEnvelope.schema';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './ContactRequestWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ContactRequestCreateWithoutDeviceInputObjectSchema), z.lazy(() => ContactRequestCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => ContactRequestUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => ContactRequestUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ContactRequestCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => ContactRequestCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ContactRequestCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ContactRequestWhereUniqueInputObjectSchema), z.lazy(() => ContactRequestWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ContactRequestUncheckedCreateNestedManyWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ContactRequestUncheckedCreateNestedManyWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestUncheckedCreateNestedManyWithoutDeviceInput>;
export const ContactRequestUncheckedCreateNestedManyWithoutDeviceInputObjectZodSchema = makeSchema();
