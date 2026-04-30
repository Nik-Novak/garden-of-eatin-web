import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './ContactRequestWhereUniqueInput.schema';
import { ContactRequestUpdateWithoutWeb_deviceInputObjectSchema as ContactRequestUpdateWithoutWeb_deviceInputObjectSchema } from './ContactRequestUpdateWithoutWeb_deviceInput.schema';
import { ContactRequestUncheckedUpdateWithoutWeb_deviceInputObjectSchema as ContactRequestUncheckedUpdateWithoutWeb_deviceInputObjectSchema } from './ContactRequestUncheckedUpdateWithoutWeb_deviceInput.schema';
import { ContactRequestCreateWithoutWeb_deviceInputObjectSchema as ContactRequestCreateWithoutWeb_deviceInputObjectSchema } from './ContactRequestCreateWithoutWeb_deviceInput.schema';
import { ContactRequestUncheckedCreateWithoutWeb_deviceInputObjectSchema as ContactRequestUncheckedCreateWithoutWeb_deviceInputObjectSchema } from './ContactRequestUncheckedCreateWithoutWeb_deviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactRequestWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ContactRequestUpdateWithoutWeb_deviceInputObjectSchema), z.lazy(() => ContactRequestUncheckedUpdateWithoutWeb_deviceInputObjectSchema)]),
  create: z.union([z.lazy(() => ContactRequestCreateWithoutWeb_deviceInputObjectSchema), z.lazy(() => ContactRequestUncheckedCreateWithoutWeb_deviceInputObjectSchema)])
}).strict();
export const ContactRequestUpsertWithWhereUniqueWithoutWeb_deviceInputObjectSchema: z.ZodType<Prisma.ContactRequestUpsertWithWhereUniqueWithoutWeb_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestUpsertWithWhereUniqueWithoutWeb_deviceInput>;
export const ContactRequestUpsertWithWhereUniqueWithoutWeb_deviceInputObjectZodSchema = makeSchema();
