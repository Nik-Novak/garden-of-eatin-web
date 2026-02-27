import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OpportunityApplicationSelectObjectSchema as OpportunityApplicationSelectObjectSchema } from './objects/OpportunityApplicationSelect.schema';
import { OpportunityApplicationIncludeObjectSchema as OpportunityApplicationIncludeObjectSchema } from './objects/OpportunityApplicationInclude.schema';
import { OpportunityApplicationUpdateInputObjectSchema as OpportunityApplicationUpdateInputObjectSchema } from './objects/OpportunityApplicationUpdateInput.schema';
import { OpportunityApplicationUncheckedUpdateInputObjectSchema as OpportunityApplicationUncheckedUpdateInputObjectSchema } from './objects/OpportunityApplicationUncheckedUpdateInput.schema';
import { OpportunityApplicationWhereUniqueInputObjectSchema as OpportunityApplicationWhereUniqueInputObjectSchema } from './objects/OpportunityApplicationWhereUniqueInput.schema';

export const OpportunityApplicationUpdateOneSchema: z.ZodType<Prisma.OpportunityApplicationUpdateArgs> = z.object({ select: OpportunityApplicationSelectObjectSchema.optional(), include: OpportunityApplicationIncludeObjectSchema.optional(), data: z.union([OpportunityApplicationUpdateInputObjectSchema, OpportunityApplicationUncheckedUpdateInputObjectSchema]), where: OpportunityApplicationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OpportunityApplicationUpdateArgs>;

export const OpportunityApplicationUpdateOneZodSchema = z.object({ select: OpportunityApplicationSelectObjectSchema.optional(), include: OpportunityApplicationIncludeObjectSchema.optional(), data: z.union([OpportunityApplicationUpdateInputObjectSchema, OpportunityApplicationUncheckedUpdateInputObjectSchema]), where: OpportunityApplicationWhereUniqueInputObjectSchema }).strict();