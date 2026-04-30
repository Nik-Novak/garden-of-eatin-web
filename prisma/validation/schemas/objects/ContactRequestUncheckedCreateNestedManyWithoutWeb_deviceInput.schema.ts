import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactRequestCreateWithoutWeb_deviceInputObjectSchema as ContactRequestCreateWithoutWeb_deviceInputObjectSchema } from './ContactRequestCreateWithoutWeb_deviceInput.schema';
import { ContactRequestUncheckedCreateWithoutWeb_deviceInputObjectSchema as ContactRequestUncheckedCreateWithoutWeb_deviceInputObjectSchema } from './ContactRequestUncheckedCreateWithoutWeb_deviceInput.schema';
import { ContactRequestCreateOrConnectWithoutWeb_deviceInputObjectSchema as ContactRequestCreateOrConnectWithoutWeb_deviceInputObjectSchema } from './ContactRequestCreateOrConnectWithoutWeb_deviceInput.schema';
import { ContactRequestCreateManyWeb_deviceInputEnvelopeObjectSchema as ContactRequestCreateManyWeb_deviceInputEnvelopeObjectSchema } from './ContactRequestCreateManyWeb_deviceInputEnvelope.schema';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './ContactRequestWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ContactRequestCreateWithoutWeb_deviceInputObjectSchema), z.lazy(() => ContactRequestCreateWithoutWeb_deviceInputObjectSchema).array(), z.lazy(() => ContactRequestUncheckedCreateWithoutWeb_deviceInputObjectSchema), z.lazy(() => ContactRequestUncheckedCreateWithoutWeb_deviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ContactRequestCreateOrConnectWithoutWeb_deviceInputObjectSchema), z.lazy(() => ContactRequestCreateOrConnectWithoutWeb_deviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ContactRequestCreateManyWeb_deviceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ContactRequestWhereUniqueInputObjectSchema), z.lazy(() => ContactRequestWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ContactRequestUncheckedCreateNestedManyWithoutWeb_deviceInputObjectSchema: z.ZodType<Prisma.ContactRequestUncheckedCreateNestedManyWithoutWeb_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestUncheckedCreateNestedManyWithoutWeb_deviceInput>;
export const ContactRequestUncheckedCreateNestedManyWithoutWeb_deviceInputObjectZodSchema = makeSchema();
