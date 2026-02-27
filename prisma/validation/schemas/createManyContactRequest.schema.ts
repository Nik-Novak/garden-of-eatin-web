import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactRequestCreateManyInputObjectSchema as ContactRequestCreateManyInputObjectSchema } from './objects/ContactRequestCreateManyInput.schema';

export const ContactRequestCreateManySchema: z.ZodType<Prisma.ContactRequestCreateManyArgs> = z.object({ data: z.union([ ContactRequestCreateManyInputObjectSchema, z.array(ContactRequestCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ContactRequestCreateManyArgs>;

export const ContactRequestCreateManyZodSchema = z.object({ data: z.union([ ContactRequestCreateManyInputObjectSchema, z.array(ContactRequestCreateManyInputObjectSchema) ]),  }).strict();