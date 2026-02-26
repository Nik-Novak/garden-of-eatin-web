import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { ContactRequestSelectObjectSchema as ContactRequestSelectObjectSchema } from './objects/ContactRequestSelect.schema';
import { ContactRequestIncludeObjectSchema as ContactRequestIncludeObjectSchema } from './objects/ContactRequestInclude.schema';
import { ContactRequestCreateInputObjectSchema as ContactRequestCreateInputObjectSchema } from './objects/ContactRequestCreateInput.schema';
import { ContactRequestUncheckedCreateInputObjectSchema as ContactRequestUncheckedCreateInputObjectSchema } from './objects/ContactRequestUncheckedCreateInput.schema';

export const ContactRequestCreateOneSchema: z.ZodType<Prisma.ContactRequestCreateArgs> = z.object({ select: ContactRequestSelectObjectSchema.optional(), include: ContactRequestIncludeObjectSchema.optional(), data: z.union([ContactRequestCreateInputObjectSchema, ContactRequestUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ContactRequestCreateArgs>;

export const ContactRequestCreateOneZodSchema = z.object({ select: ContactRequestSelectObjectSchema.optional(), include: ContactRequestIncludeObjectSchema.optional(), data: z.union([ContactRequestCreateInputObjectSchema, ContactRequestUncheckedCreateInputObjectSchema]) }).strict();