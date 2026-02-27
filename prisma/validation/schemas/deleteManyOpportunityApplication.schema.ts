import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OpportunityApplicationWhereInputObjectSchema as OpportunityApplicationWhereInputObjectSchema } from './objects/OpportunityApplicationWhereInput.schema';

export const OpportunityApplicationDeleteManySchema: z.ZodType<Prisma.OpportunityApplicationDeleteManyArgs> = z.object({ where: OpportunityApplicationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OpportunityApplicationDeleteManyArgs>;

export const OpportunityApplicationDeleteManyZodSchema = z.object({ where: OpportunityApplicationWhereInputObjectSchema.optional() }).strict();