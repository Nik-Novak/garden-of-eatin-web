import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './ContactRequestWhereUniqueInput.schema';
import { ContactRequestCreateWithoutWeb_deviceInputObjectSchema as ContactRequestCreateWithoutWeb_deviceInputObjectSchema } from './ContactRequestCreateWithoutWeb_deviceInput.schema';
import { ContactRequestUncheckedCreateWithoutWeb_deviceInputObjectSchema as ContactRequestUncheckedCreateWithoutWeb_deviceInputObjectSchema } from './ContactRequestUncheckedCreateWithoutWeb_deviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactRequestWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ContactRequestCreateWithoutWeb_deviceInputObjectSchema), z.lazy(() => ContactRequestUncheckedCreateWithoutWeb_deviceInputObjectSchema)])
}).strict();
export const ContactRequestCreateOrConnectWithoutWeb_deviceInputObjectSchema: z.ZodType<Prisma.ContactRequestCreateOrConnectWithoutWeb_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestCreateOrConnectWithoutWeb_deviceInput>;
export const ContactRequestCreateOrConnectWithoutWeb_deviceInputObjectZodSchema = makeSchema();
