import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { ContactRequestSelectObjectSchema as ContactRequestSelectObjectSchema } from './objects/ContactRequestSelect.schema';
import { ContactRequestIncludeObjectSchema as ContactRequestIncludeObjectSchema } from './objects/ContactRequestInclude.schema';
import { ContactRequestUpdateInputObjectSchema as ContactRequestUpdateInputObjectSchema } from './objects/ContactRequestUpdateInput.schema';
import { ContactRequestUncheckedUpdateInputObjectSchema as ContactRequestUncheckedUpdateInputObjectSchema } from './objects/ContactRequestUncheckedUpdateInput.schema';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './objects/ContactRequestWhereUniqueInput.schema';

export const ContactRequestUpdateOneSchema: z.ZodType<Prisma.ContactRequestUpdateArgs> = z.object({ select: ContactRequestSelectObjectSchema.optional(), include: ContactRequestIncludeObjectSchema.optional(), data: z.union([ContactRequestUpdateInputObjectSchema, ContactRequestUncheckedUpdateInputObjectSchema]), where: ContactRequestWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContactRequestUpdateArgs>;

export const ContactRequestUpdateOneZodSchema = z.object({ select: ContactRequestSelectObjectSchema.optional(), include: ContactRequestIncludeObjectSchema.optional(), data: z.union([ContactRequestUpdateInputObjectSchema, ContactRequestUncheckedUpdateInputObjectSchema]), where: ContactRequestWhereUniqueInputObjectSchema }).strict();