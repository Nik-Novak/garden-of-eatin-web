import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { OpportunitySelectObjectSchema as OpportunitySelectObjectSchema } from './objects/OpportunitySelect.schema';
import { OpportunityIncludeObjectSchema as OpportunityIncludeObjectSchema } from './objects/OpportunityInclude.schema';
import { OpportunityWhereUniqueInputObjectSchema as OpportunityWhereUniqueInputObjectSchema } from './objects/OpportunityWhereUniqueInput.schema';

export const OpportunityFindUniqueOrThrowSchema: z.ZodType<Prisma.OpportunityFindUniqueOrThrowArgs> = z.object({ select: OpportunitySelectObjectSchema.optional(), include: OpportunityIncludeObjectSchema.optional(), where: OpportunityWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OpportunityFindUniqueOrThrowArgs>;

export const OpportunityFindUniqueOrThrowZodSchema = z.object({ select: OpportunitySelectObjectSchema.optional(), include: OpportunityIncludeObjectSchema.optional(), where: OpportunityWhereUniqueInputObjectSchema }).strict();