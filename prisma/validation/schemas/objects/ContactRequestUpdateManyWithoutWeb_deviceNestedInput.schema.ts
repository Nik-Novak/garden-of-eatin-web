import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactRequestCreateWithoutWeb_deviceInputObjectSchema as ContactRequestCreateWithoutWeb_deviceInputObjectSchema } from './ContactRequestCreateWithoutWeb_deviceInput.schema';
import { ContactRequestUncheckedCreateWithoutWeb_deviceInputObjectSchema as ContactRequestUncheckedCreateWithoutWeb_deviceInputObjectSchema } from './ContactRequestUncheckedCreateWithoutWeb_deviceInput.schema';
import { ContactRequestCreateOrConnectWithoutWeb_deviceInputObjectSchema as ContactRequestCreateOrConnectWithoutWeb_deviceInputObjectSchema } from './ContactRequestCreateOrConnectWithoutWeb_deviceInput.schema';
import { ContactRequestUpsertWithWhereUniqueWithoutWeb_deviceInputObjectSchema as ContactRequestUpsertWithWhereUniqueWithoutWeb_deviceInputObjectSchema } from './ContactRequestUpsertWithWhereUniqueWithoutWeb_deviceInput.schema';
import { ContactRequestCreateManyWeb_deviceInputEnvelopeObjectSchema as ContactRequestCreateManyWeb_deviceInputEnvelopeObjectSchema } from './ContactRequestCreateManyWeb_deviceInputEnvelope.schema';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './ContactRequestWhereUniqueInput.schema';
import { ContactRequestUpdateWithWhereUniqueWithoutWeb_deviceInputObjectSchema as ContactRequestUpdateWithWhereUniqueWithoutWeb_deviceInputObjectSchema } from './ContactRequestUpdateWithWhereUniqueWithoutWeb_deviceInput.schema';
import { ContactRequestUpdateManyWithWhereWithoutWeb_deviceInputObjectSchema as ContactRequestUpdateManyWithWhereWithoutWeb_deviceInputObjectSchema } from './ContactRequestUpdateManyWithWhereWithoutWeb_deviceInput.schema';
import { ContactRequestScalarWhereInputObjectSchema as ContactRequestScalarWhereInputObjectSchema } from './ContactRequestScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ContactRequestCreateWithoutWeb_deviceInputObjectSchema), z.lazy(() => ContactRequestCreateWithoutWeb_deviceInputObjectSchema).array(), z.lazy(() => ContactRequestUncheckedCreateWithoutWeb_deviceInputObjectSchema), z.lazy(() => ContactRequestUncheckedCreateWithoutWeb_deviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ContactRequestCreateOrConnectWithoutWeb_deviceInputObjectSchema), z.lazy(() => ContactRequestCreateOrConnectWithoutWeb_deviceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ContactRequestUpsertWithWhereUniqueWithoutWeb_deviceInputObjectSchema), z.lazy(() => ContactRequestUpsertWithWhereUniqueWithoutWeb_deviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ContactRequestCreateManyWeb_deviceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ContactRequestWhereUniqueInputObjectSchema), z.lazy(() => ContactRequestWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ContactRequestWhereUniqueInputObjectSchema), z.lazy(() => ContactRequestWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ContactRequestWhereUniqueInputObjectSchema), z.lazy(() => ContactRequestWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ContactRequestWhereUniqueInputObjectSchema), z.lazy(() => ContactRequestWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ContactRequestUpdateWithWhereUniqueWithoutWeb_deviceInputObjectSchema), z.lazy(() => ContactRequestUpdateWithWhereUniqueWithoutWeb_deviceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ContactRequestUpdateManyWithWhereWithoutWeb_deviceInputObjectSchema), z.lazy(() => ContactRequestUpdateManyWithWhereWithoutWeb_deviceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ContactRequestScalarWhereInputObjectSchema), z.lazy(() => ContactRequestScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ContactRequestUpdateManyWithoutWeb_deviceNestedInputObjectSchema: z.ZodType<Prisma.ContactRequestUpdateManyWithoutWeb_deviceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestUpdateManyWithoutWeb_deviceNestedInput>;
export const ContactRequestUpdateManyWithoutWeb_deviceNestedInputObjectZodSchema = makeSchema();
