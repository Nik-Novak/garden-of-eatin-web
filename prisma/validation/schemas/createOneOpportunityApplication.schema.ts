import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OpportunityApplicationSelectObjectSchema as OpportunityApplicationSelectObjectSchema } from './objects/OpportunityApplicationSelect.schema';
import { OpportunityApplicationIncludeObjectSchema as OpportunityApplicationIncludeObjectSchema } from './objects/OpportunityApplicationInclude.schema';
import { OpportunityApplicationCreateInputObjectSchema as OpportunityApplicationCreateInputObjectSchema } from './objects/OpportunityApplicationCreateInput.schema';
import { OpportunityApplicationUncheckedCreateInputObjectSchema as OpportunityApplicationUncheckedCreateInputObjectSchema } from './objects/OpportunityApplicationUncheckedCreateInput.schema';

export const OpportunityApplicationCreateOneSchema: z.ZodType<Prisma.OpportunityApplicationCreateArgs> = z.object({ select: OpportunityApplicationSelectObjectSchema.optional(), include: OpportunityApplicationIncludeObjectSchema.optional(), data: z.union([OpportunityApplicationCreateInputObjectSchema, OpportunityApplicationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.OpportunityApplicationCreateArgs>;

export const OpportunityApplicationCreateOneZodSchema = z.object({ select: OpportunityApplicationSelectObjectSchema.optional(), include: OpportunityApplicationIncludeObjectSchema.optional(), data: z.union([OpportunityApplicationCreateInputObjectSchema, OpportunityApplicationUncheckedCreateInputObjectSchema]) }).strict();