import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './ContactRequestWhereUniqueInput.schema';
import { ContactRequestCreateWithoutDeviceInputObjectSchema as ContactRequestCreateWithoutDeviceInputObjectSchema } from './ContactRequestCreateWithoutDeviceInput.schema';
import { ContactRequestUncheckedCreateWithoutDeviceInputObjectSchema as ContactRequestUncheckedCreateWithoutDeviceInputObjectSchema } from './ContactRequestUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactRequestWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ContactRequestCreateWithoutDeviceInputObjectSchema), z.lazy(() => ContactRequestUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const ContactRequestCreateOrConnectWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ContactRequestCreateOrConnectWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestCreateOrConnectWithoutDeviceInput>;
export const ContactRequestCreateOrConnectWithoutDeviceInputObjectZodSchema = makeSchema();
