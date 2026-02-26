import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './ContactRequestWhereUniqueInput.schema';
import { ContactRequestUpdateWithoutDeviceInputObjectSchema as ContactRequestUpdateWithoutDeviceInputObjectSchema } from './ContactRequestUpdateWithoutDeviceInput.schema';
import { ContactRequestUncheckedUpdateWithoutDeviceInputObjectSchema as ContactRequestUncheckedUpdateWithoutDeviceInputObjectSchema } from './ContactRequestUncheckedUpdateWithoutDeviceInput.schema';
import { ContactRequestCreateWithoutDeviceInputObjectSchema as ContactRequestCreateWithoutDeviceInputObjectSchema } from './ContactRequestCreateWithoutDeviceInput.schema';
import { ContactRequestUncheckedCreateWithoutDeviceInputObjectSchema as ContactRequestUncheckedCreateWithoutDeviceInputObjectSchema } from './ContactRequestUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactRequestWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ContactRequestUpdateWithoutDeviceInputObjectSchema), z.lazy(() => ContactRequestUncheckedUpdateWithoutDeviceInputObjectSchema)]),
  create: z.union([z.lazy(() => ContactRequestCreateWithoutDeviceInputObjectSchema), z.lazy(() => ContactRequestUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const ContactRequestUpsertWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ContactRequestUpsertWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestUpsertWithWhereUniqueWithoutDeviceInput>;
export const ContactRequestUpsertWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
