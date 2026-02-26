import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ContactRequestScalarWhereInputObjectSchema as ContactRequestScalarWhereInputObjectSchema } from './ContactRequestScalarWhereInput.schema';
import { ContactRequestUpdateManyMutationInputObjectSchema as ContactRequestUpdateManyMutationInputObjectSchema } from './ContactRequestUpdateManyMutationInput.schema';
import { ContactRequestUncheckedUpdateManyWithoutDeviceInputObjectSchema as ContactRequestUncheckedUpdateManyWithoutDeviceInputObjectSchema } from './ContactRequestUncheckedUpdateManyWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactRequestScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ContactRequestUpdateManyMutationInputObjectSchema), z.lazy(() => ContactRequestUncheckedUpdateManyWithoutDeviceInputObjectSchema)])
}).strict();
export const ContactRequestUpdateManyWithWhereWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ContactRequestUpdateManyWithWhereWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestUpdateManyWithWhereWithoutDeviceInput>;
export const ContactRequestUpdateManyWithWhereWithoutDeviceInputObjectZodSchema = makeSchema();
