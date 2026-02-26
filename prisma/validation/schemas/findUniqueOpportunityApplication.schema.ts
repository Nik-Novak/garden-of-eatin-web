import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OpportunityApplicationSelectObjectSchema as OpportunityApplicationSelectObjectSchema } from './objects/OpportunityApplicationSelect.schema';
import { OpportunityApplicationIncludeObjectSchema as OpportunityApplicationIncludeObjectSchema } from './objects/OpportunityApplicationInclude.schema';
import { OpportunityApplicationWhereUniqueInputObjectSchema as OpportunityApplicationWhereUniqueInputObjectSchema } from './objects/OpportunityApplicationWhereUniqueInput.schema';

export const OpportunityApplicationFindUniqueSchema: z.ZodType<Prisma.OpportunityApplicationFindUniqueArgs> = z.object({ select: OpportunityApplicationSelectObjectSchema.optional(), include: OpportunityApplicationIncludeObjectSchema.optional(), where: OpportunityApplicationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OpportunityApplicationFindUniqueArgs>;

export const OpportunityApplicationFindUniqueZodSchema = z.object({ select: OpportunityApplicationSelectObjectSchema.optional(), include: OpportunityApplicationIncludeObjectSchema.optional(), where: OpportunityApplicationWhereUniqueInputObjectSchema }).strict();