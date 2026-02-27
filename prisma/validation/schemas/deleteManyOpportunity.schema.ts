import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OpportunityWhereInputObjectSchema as OpportunityWhereInputObjectSchema } from './objects/OpportunityWhereInput.schema';

export const OpportunityDeleteManySchema: z.ZodType<Prisma.OpportunityDeleteManyArgs> = z.object({ where: OpportunityWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OpportunityDeleteManyArgs>;

export const OpportunityDeleteManyZodSchema = z.object({ where: OpportunityWhereInputObjectSchema.optional() }).strict();