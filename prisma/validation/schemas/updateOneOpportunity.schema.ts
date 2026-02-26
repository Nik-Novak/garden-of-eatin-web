import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OpportunitySelectObjectSchema as OpportunitySelectObjectSchema } from './objects/OpportunitySelect.schema';
import { OpportunityIncludeObjectSchema as OpportunityIncludeObjectSchema } from './objects/OpportunityInclude.schema';
import { OpportunityUpdateInputObjectSchema as OpportunityUpdateInputObjectSchema } from './objects/OpportunityUpdateInput.schema';
import { OpportunityUncheckedUpdateInputObjectSchema as OpportunityUncheckedUpdateInputObjectSchema } from './objects/OpportunityUncheckedUpdateInput.schema';
import { OpportunityWhereUniqueInputObjectSchema as OpportunityWhereUniqueInputObjectSchema } from './objects/OpportunityWhereUniqueInput.schema';

export const OpportunityUpdateOneSchema: z.ZodType<Prisma.OpportunityUpdateArgs> = z.object({ select: OpportunitySelectObjectSchema.optional(), include: OpportunityIncludeObjectSchema.optional(), data: z.union([OpportunityUpdateInputObjectSchema, OpportunityUncheckedUpdateInputObjectSchema]), where: OpportunityWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OpportunityUpdateArgs>;

export const OpportunityUpdateOneZodSchema = z.object({ select: OpportunitySelectObjectSchema.optional(), include: OpportunityIncludeObjectSchema.optional(), data: z.union([OpportunityUpdateInputObjectSchema, OpportunityUncheckedUpdateInputObjectSchema]), where: OpportunityWhereUniqueInputObjectSchema }).strict();