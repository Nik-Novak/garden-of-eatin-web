import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './ContactRequestWhereUniqueInput.schema';
import { ContactRequestUpdateWithoutWeb_deviceInputObjectSchema as ContactRequestUpdateWithoutWeb_deviceInputObjectSchema } from './ContactRequestUpdateWithoutWeb_deviceInput.schema';
import { ContactRequestUncheckedUpdateWithoutWeb_deviceInputObjectSchema as ContactRequestUncheckedUpdateWithoutWeb_deviceInputObjectSchema } from './ContactRequestUncheckedUpdateWithoutWeb_deviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactRequestWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ContactRequestUpdateWithoutWeb_deviceInputObjectSchema), z.lazy(() => ContactRequestUncheckedUpdateWithoutWeb_deviceInputObjectSchema)])
}).strict();
export const ContactRequestUpdateWithWhereUniqueWithoutWeb_deviceInputObjectSchema: z.ZodType<Prisma.ContactRequestUpdateWithWhereUniqueWithoutWeb_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestUpdateWithWhereUniqueWithoutWeb_deviceInput>;
export const ContactRequestUpdateWithWhereUniqueWithoutWeb_deviceInputObjectZodSchema = makeSchema();
