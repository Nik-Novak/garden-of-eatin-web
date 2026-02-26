import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ContactRequestCreateWithoutDeviceInputObjectSchema as ContactRequestCreateWithoutDeviceInputObjectSchema } from './ContactRequestCreateWithoutDeviceInput.schema';
import { ContactRequestUncheckedCreateWithoutDeviceInputObjectSchema as ContactRequestUncheckedCreateWithoutDeviceInputObjectSchema } from './ContactRequestUncheckedCreateWithoutDeviceInput.schema';
import { ContactRequestCreateOrConnectWithoutDeviceInputObjectSchema as ContactRequestCreateOrConnectWithoutDeviceInputObjectSchema } from './ContactRequestCreateOrConnectWithoutDeviceInput.schema';
import { ContactRequestUpsertWithWhereUniqueWithoutDeviceInputObjectSchema as ContactRequestUpsertWithWhereUniqueWithoutDeviceInputObjectSchema } from './ContactRequestUpsertWithWhereUniqueWithoutDeviceInput.schema';
import { ContactRequestCreateManyDeviceInputEnvelopeObjectSchema as ContactRequestCreateManyDeviceInputEnvelopeObjectSchema } from './ContactRequestCreateManyDeviceInputEnvelope.schema';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './ContactRequestWhereUniqueInput.schema';
import { ContactRequestUpdateWithWhereUniqueWithoutDeviceInputObjectSchema as ContactRequestUpdateWithWhereUniqueWithoutDeviceInputObjectSchema } from './ContactRequestUpdateWithWhereUniqueWithoutDeviceInput.schema';
import { ContactRequestUpdateManyWithWhereWithoutDeviceInputObjectSchema as ContactRequestUpdateManyWithWhereWithoutDeviceInputObjectSchema } from './ContactRequestUpdateManyWithWhereWithoutDeviceInput.schema';
import { ContactRequestScalarWhereInputObjectSchema as ContactRequestScalarWhereInputObjectSchema } from './ContactRequestScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ContactRequestCreateWithoutDeviceInputObjectSchema), z.lazy(() => ContactRequestCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => ContactRequestUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => ContactRequestUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ContactRequestCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => ContactRequestCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ContactRequestUpsertWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => ContactRequestUpsertWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ContactRequestCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ContactRequestWhereUniqueInputObjectSchema), z.lazy(() => ContactRequestWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ContactRequestWhereUniqueInputObjectSchema), z.lazy(() => ContactRequestWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ContactRequestWhereUniqueInputObjectSchema), z.lazy(() => ContactRequestWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ContactRequestWhereUniqueInputObjectSchema), z.lazy(() => ContactRequestWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ContactRequestUpdateWithWhereUniqueWithoutDeviceInputObjectSchema), z.lazy(() => ContactRequestUpdateWithWhereUniqueWithoutDeviceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ContactRequestUpdateManyWithWhereWithoutDeviceInputObjectSchema), z.lazy(() => ContactRequestUpdateManyWithWhereWithoutDeviceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ContactRequestScalarWhereInputObjectSchema), z.lazy(() => ContactRequestScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ContactRequestUncheckedUpdateManyWithoutDeviceNestedInputObjectSchema: z.ZodType<Prisma.ContactRequestUncheckedUpdateManyWithoutDeviceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestUncheckedUpdateManyWithoutDeviceNestedInput>;
export const ContactRequestUncheckedUpdateManyWithoutDeviceNestedInputObjectZodSchema = makeSchema();
