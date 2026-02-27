import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BugUpdateManyMutationInputObjectSchema as BugUpdateManyMutationInputObjectSchema } from './objects/BugUpdateManyMutationInput.schema';
import { BugWhereInputObjectSchema as BugWhereInputObjectSchema } from './objects/BugWhereInput.schema';

export const BugUpdateManySchema: z.ZodType<Prisma.BugUpdateManyArgs> = z.object({ data: BugUpdateManyMutationInputObjectSchema, where: BugWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BugUpdateManyArgs>;

export const BugUpdateManyZodSchema = z.object({ data: BugUpdateManyMutationInputObjectSchema, where: BugWhereInputObjectSchema.optional() }).strict();