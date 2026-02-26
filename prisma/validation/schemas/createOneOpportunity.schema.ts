import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OpportunitySelectObjectSchema as OpportunitySelectObjectSchema } from './objects/OpportunitySelect.schema';
import { OpportunityIncludeObjectSchema as OpportunityIncludeObjectSchema } from './objects/OpportunityInclude.schema';
import { OpportunityCreateInputObjectSchema as OpportunityCreateInputObjectSchema } from './objects/OpportunityCreateInput.schema';
import { OpportunityUncheckedCreateInputObjectSchema as OpportunityUncheckedCreateInputObjectSchema } from './objects/OpportunityUncheckedCreateInput.schema';

export const OpportunityCreateOneSchema: z.ZodType<Prisma.OpportunityCreateArgs> = z.object({ select: OpportunitySelectObjectSchema.optional(), include: OpportunityIncludeObjectSchema.optional(), data: z.union([OpportunityCreateInputObjectSchema, OpportunityUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.OpportunityCreateArgs>;

export const OpportunityCreateOneZodSchema = z.object({ select: OpportunitySelectObjectSchema.optional(), include: OpportunityIncludeObjectSchema.optional(), data: z.union([OpportunityCreateInputObjectSchema, OpportunityUncheckedCreateInputObjectSchema]) }).strict();