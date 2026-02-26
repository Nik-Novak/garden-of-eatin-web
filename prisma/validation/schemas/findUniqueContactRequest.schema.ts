import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ContactRequestSelectObjectSchema as ContactRequestSelectObjectSchema } from './objects/ContactRequestSelect.schema';
import { ContactRequestIncludeObjectSchema as ContactRequestIncludeObjectSchema } from './objects/ContactRequestInclude.schema';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './objects/ContactRequestWhereUniqueInput.schema';

export const ContactRequestFindUniqueSchema: z.ZodType<Prisma.ContactRequestFindUniqueArgs> = z.object({ select: ContactRequestSelectObjectSchema.optional(), include: ContactRequestIncludeObjectSchema.optional(), where: ContactRequestWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContactRequestFindUniqueArgs>;

export const ContactRequestFindUniqueZodSchema = z.object({ select: ContactRequestSelectObjectSchema.optional(), include: ContactRequestIncludeObjectSchema.optional(), where: ContactRequestWhereUniqueInputObjectSchema }).strict();