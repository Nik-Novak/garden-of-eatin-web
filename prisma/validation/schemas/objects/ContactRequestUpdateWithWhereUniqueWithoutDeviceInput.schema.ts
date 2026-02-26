import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './ContactRequestWhereUniqueInput.schema';
import { ContactRequestUpdateWithoutDeviceInputObjectSchema as ContactRequestUpdateWithoutDeviceInputObjectSchema } from './ContactRequestUpdateWithoutDeviceInput.schema';
import { ContactRequestUncheckedUpdateWithoutDeviceInputObjectSchema as ContactRequestUncheckedUpdateWithoutDeviceInputObjectSchema } from './ContactRequestUncheckedUpdateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactRequestWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ContactRequestUpdateWithoutDeviceInputObjectSchema), z.lazy(() => ContactRequestUncheckedUpdateWithoutDeviceInputObjectSchema)])
}).strict();
export const ContactRequestUpdateWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ContactRequestUpdateWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestUpdateWithWhereUniqueWithoutDeviceInput>;
export const ContactRequestUpdateWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
