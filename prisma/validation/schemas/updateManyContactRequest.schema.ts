import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ContactRequestUpdateManyMutationInputObjectSchema as ContactRequestUpdateManyMutationInputObjectSchema } from './objects/ContactRequestUpdateManyMutationInput.schema';
import { ContactRequestWhereInputObjectSchema as ContactRequestWhereInputObjectSchema } from './objects/ContactRequestWhereInput.schema';

export const ContactRequestUpdateManySchema: z.ZodType<Prisma.ContactRequestUpdateManyArgs> = z.object({ data: ContactRequestUpdateManyMutationInputObjectSchema, where: ContactRequestWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContactRequestUpdateManyArgs>;

export const ContactRequestUpdateManyZodSchema = z.object({ data: ContactRequestUpdateManyMutationInputObjectSchema, where: ContactRequestWhereInputObjectSchema.optional() }).strict();