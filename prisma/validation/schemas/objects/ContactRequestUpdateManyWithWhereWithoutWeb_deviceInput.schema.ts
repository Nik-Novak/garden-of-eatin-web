import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactRequestScalarWhereInputObjectSchema as ContactRequestScalarWhereInputObjectSchema } from './ContactRequestScalarWhereInput.schema';
import { ContactRequestUpdateManyMutationInputObjectSchema as ContactRequestUpdateManyMutationInputObjectSchema } from './ContactRequestUpdateManyMutationInput.schema';
import { ContactRequestUncheckedUpdateManyWithoutWeb_deviceInputObjectSchema as ContactRequestUncheckedUpdateManyWithoutWeb_deviceInputObjectSchema } from './ContactRequestUncheckedUpdateManyWithoutWeb_deviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactRequestScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ContactRequestUpdateManyMutationInputObjectSchema), z.lazy(() => ContactRequestUncheckedUpdateManyWithoutWeb_deviceInputObjectSchema)])
}).strict();
export const ContactRequestUpdateManyWithWhereWithoutWeb_deviceInputObjectSchema: z.ZodType<Prisma.ContactRequestUpdateManyWithWhereWithoutWeb_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestUpdateManyWithWhereWithoutWeb_deviceInput>;
export const ContactRequestUpdateManyWithWhereWithoutWeb_deviceInputObjectZodSchema = makeSchema();
