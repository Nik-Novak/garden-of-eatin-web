import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { OpportunityApplicationSelectObjectSchema as OpportunityApplicationSelectObjectSchema } from './objects/OpportunityApplicationSelect.schema';
import { OpportunityApplicationIncludeObjectSchema as OpportunityApplicationIncludeObjectSchema } from './objects/OpportunityApplicationInclude.schema';
import { OpportunityApplicationWhereUniqueInputObjectSchema as OpportunityApplicationWhereUniqueInputObjectSchema } from './objects/OpportunityApplicationWhereUniqueInput.schema';

export const OpportunityApplicationFindUniqueOrThrowSchema: z.ZodType<Prisma.OpportunityApplicationFindUniqueOrThrowArgs> = z.object({ select: OpportunityApplicationSelectObjectSchema.optional(), include: OpportunityApplicationIncludeObjectSchema.optional(), where: OpportunityApplicationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OpportunityApplicationFindUniqueOrThrowArgs>;

export const OpportunityApplicationFindUniqueOrThrowZodSchema = z.object({ select: OpportunityApplicationSelectObjectSchema.optional(), include: OpportunityApplicationIncludeObjectSchema.optional(), where: OpportunityApplicationWhereUniqueInputObjectSchema }).strict();