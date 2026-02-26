import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { ContactRequestWhereInputObjectSchema as ContactRequestWhereInputObjectSchema } from './objects/ContactRequestWhereInput.schema';

export const ContactRequestDeleteManySchema: z.ZodType<Prisma.ContactRequestDeleteManyArgs> = z.object({ where: ContactRequestWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContactRequestDeleteManyArgs>;

export const ContactRequestDeleteManyZodSchema = z.object({ where: ContactRequestWhereInputObjectSchema.optional() }).strict();