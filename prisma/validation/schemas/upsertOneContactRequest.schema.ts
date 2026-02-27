import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactRequestSelectObjectSchema as ContactRequestSelectObjectSchema } from './objects/ContactRequestSelect.schema';
import { ContactRequestIncludeObjectSchema as ContactRequestIncludeObjectSchema } from './objects/ContactRequestInclude.schema';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './objects/ContactRequestWhereUniqueInput.schema';
import { ContactRequestCreateInputObjectSchema as ContactRequestCreateInputObjectSchema } from './objects/ContactRequestCreateInput.schema';
import { ContactRequestUncheckedCreateInputObjectSchema as ContactRequestUncheckedCreateInputObjectSchema } from './objects/ContactRequestUncheckedCreateInput.schema';
import { ContactRequestUpdateInputObjectSchema as ContactRequestUpdateInputObjectSchema } from './objects/ContactRequestUpdateInput.schema';
import { ContactRequestUncheckedUpdateInputObjectSchema as ContactRequestUncheckedUpdateInputObjectSchema } from './objects/ContactRequestUncheckedUpdateInput.schema';

export const ContactRequestUpsertOneSchema: z.ZodType<Prisma.ContactRequestUpsertArgs> = z.object({ select: ContactRequestSelectObjectSchema.optional(), include: ContactRequestIncludeObjectSchema.optional(), where: ContactRequestWhereUniqueInputObjectSchema, create: z.union([ ContactRequestCreateInputObjectSchema, ContactRequestUncheckedCreateInputObjectSchema ]), update: z.union([ ContactRequestUpdateInputObjectSchema, ContactRequestUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ContactRequestUpsertArgs>;

export const ContactRequestUpsertOneZodSchema = z.object({ select: ContactRequestSelectObjectSchema.optional(), include: ContactRequestIncludeObjectSchema.optional(), where: ContactRequestWhereUniqueInputObjectSchema, create: z.union([ ContactRequestCreateInputObjectSchema, ContactRequestUncheckedCreateInputObjectSchema ]), update: z.union([ ContactRequestUpdateInputObjectSchema, ContactRequestUncheckedUpdateInputObjectSchema ]) }).strict();