import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContributorCreateManyInputObjectSchema as ContributorCreateManyInputObjectSchema } from './objects/ContributorCreateManyInput.schema';

export const ContributorCreateManySchema: z.ZodType<Prisma.ContributorCreateManyArgs> = z.object({ data: z.union([ ContributorCreateManyInputObjectSchema, z.array(ContributorCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ContributorCreateManyArgs>;

export const ContributorCreateManyZodSchema = z.object({ data: z.union([ ContributorCreateManyInputObjectSchema, z.array(ContributorCreateManyInputObjectSchema) ]),  }).strict();