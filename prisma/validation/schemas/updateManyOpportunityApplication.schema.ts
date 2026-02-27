import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OpportunityApplicationUpdateManyMutationInputObjectSchema as OpportunityApplicationUpdateManyMutationInputObjectSchema } from './objects/OpportunityApplicationUpdateManyMutationInput.schema';
import { OpportunityApplicationWhereInputObjectSchema as OpportunityApplicationWhereInputObjectSchema } from './objects/OpportunityApplicationWhereInput.schema';

export const OpportunityApplicationUpdateManySchema: z.ZodType<Prisma.OpportunityApplicationUpdateManyArgs> = z.object({ data: OpportunityApplicationUpdateManyMutationInputObjectSchema, where: OpportunityApplicationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OpportunityApplicationUpdateManyArgs>;

export const OpportunityApplicationUpdateManyZodSchema = z.object({ data: OpportunityApplicationUpdateManyMutationInputObjectSchema, where: OpportunityApplicationWhereInputObjectSchema.optional() }).strict();