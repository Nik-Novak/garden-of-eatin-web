import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactRequestSelectObjectSchema as ContactRequestSelectObjectSchema } from './objects/ContactRequestSelect.schema';
import { ContactRequestIncludeObjectSchema as ContactRequestIncludeObjectSchema } from './objects/ContactRequestInclude.schema';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './objects/ContactRequestWhereUniqueInput.schema';

export const ContactRequestDeleteOneSchema: z.ZodType<Prisma.ContactRequestDeleteArgs> = z.object({ select: ContactRequestSelectObjectSchema.optional(), include: ContactRequestIncludeObjectSchema.optional(), where: ContactRequestWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContactRequestDeleteArgs>;

export const ContactRequestDeleteOneZodSchema = z.object({ select: ContactRequestSelectObjectSchema.optional(), include: ContactRequestIncludeObjectSchema.optional(), where: ContactRequestWhereUniqueInputObjectSchema }).strict();