import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InviteCreateManyInputObjectSchema as InviteCreateManyInputObjectSchema } from './objects/InviteCreateManyInput.schema';

export const InviteCreateManySchema: z.ZodType<Prisma.InviteCreateManyArgs> = z.object({ data: z.union([ InviteCreateManyInputObjectSchema, z.array(InviteCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.InviteCreateManyArgs>;

export const InviteCreateManyZodSchema = z.object({ data: z.union([ InviteCreateManyInputObjectSchema, z.array(InviteCreateManyInputObjectSchema) ]),  }).strict();