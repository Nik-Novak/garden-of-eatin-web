import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { OpportunityUpdateManyMutationInputObjectSchema as OpportunityUpdateManyMutationInputObjectSchema } from './objects/OpportunityUpdateManyMutationInput.schema';
import { OpportunityWhereInputObjectSchema as OpportunityWhereInputObjectSchema } from './objects/OpportunityWhereInput.schema';

export const OpportunityUpdateManySchema: z.ZodType<Prisma.OpportunityUpdateManyArgs> = z.object({ data: OpportunityUpdateManyMutationInputObjectSchema, where: OpportunityWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OpportunityUpdateManyArgs>;

export const OpportunityUpdateManyZodSchema = z.object({ data: OpportunityUpdateManyMutationInputObjectSchema, where: OpportunityWhereInputObjectSchema.optional() }).strict();