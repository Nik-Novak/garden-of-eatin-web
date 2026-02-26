import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { BugCreateManyInputObjectSchema as BugCreateManyInputObjectSchema } from './objects/BugCreateManyInput.schema';

export const BugCreateManySchema: z.ZodType<Prisma.BugCreateManyArgs> = z.object({ data: z.union([ BugCreateManyInputObjectSchema, z.array(BugCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.BugCreateManyArgs>;

export const BugCreateManyZodSchema = z.object({ data: z.union([ BugCreateManyInputObjectSchema, z.array(BugCreateManyInputObjectSchema) ]),  }).strict();