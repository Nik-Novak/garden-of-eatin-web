import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { ContactRequestSelectObjectSchema as ContactRequestSelectObjectSchema } from './objects/ContactRequestSelect.schema';
import { ContactRequestIncludeObjectSchema as ContactRequestIncludeObjectSchema } from './objects/ContactRequestInclude.schema';
import { ContactRequestWhereUniqueInputObjectSchema as ContactRequestWhereUniqueInputObjectSchema } from './objects/ContactRequestWhereUniqueInput.schema';

export const ContactRequestFindUniqueOrThrowSchema: z.ZodType<Prisma.ContactRequestFindUniqueOrThrowArgs> = z.object({ select: ContactRequestSelectObjectSchema.optional(), include: ContactRequestIncludeObjectSchema.optional(), where: ContactRequestWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContactRequestFindUniqueOrThrowArgs>;

export const ContactRequestFindUniqueOrThrowZodSchema = z.object({ select: ContactRequestSelectObjectSchema.optional(), include: ContactRequestIncludeObjectSchema.optional(), where: ContactRequestWhereUniqueInputObjectSchema }).strict();