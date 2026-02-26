import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OpportunitySelectObjectSchema as OpportunitySelectObjectSchema } from './objects/OpportunitySelect.schema';
import { OpportunityIncludeObjectSchema as OpportunityIncludeObjectSchema } from './objects/OpportunityInclude.schema';
import { OpportunityWhereUniqueInputObjectSchema as OpportunityWhereUniqueInputObjectSchema } from './objects/OpportunityWhereUniqueInput.schema';
import { OpportunityCreateInputObjectSchema as OpportunityCreateInputObjectSchema } from './objects/OpportunityCreateInput.schema';
import { OpportunityUncheckedCreateInputObjectSchema as OpportunityUncheckedCreateInputObjectSchema } from './objects/OpportunityUncheckedCreateInput.schema';
import { OpportunityUpdateInputObjectSchema as OpportunityUpdateInputObjectSchema } from './objects/OpportunityUpdateInput.schema';
import { OpportunityUncheckedUpdateInputObjectSchema as OpportunityUncheckedUpdateInputObjectSchema } from './objects/OpportunityUncheckedUpdateInput.schema';

export const OpportunityUpsertOneSchema: z.ZodType<Prisma.OpportunityUpsertArgs> = z.object({ select: OpportunitySelectObjectSchema.optional(), include: OpportunityIncludeObjectSchema.optional(), where: OpportunityWhereUniqueInputObjectSchema, create: z.union([ OpportunityCreateInputObjectSchema, OpportunityUncheckedCreateInputObjectSchema ]), update: z.union([ OpportunityUpdateInputObjectSchema, OpportunityUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.OpportunityUpsertArgs>;

export const OpportunityUpsertOneZodSchema = z.object({ select: OpportunitySelectObjectSchema.optional(), include: OpportunityIncludeObjectSchema.optional(), where: OpportunityWhereUniqueInputObjectSchema, create: z.union([ OpportunityCreateInputObjectSchema, OpportunityUncheckedCreateInputObjectSchema ]), update: z.union([ OpportunityUpdateInputObjectSchema, OpportunityUncheckedUpdateInputObjectSchema ]) }).strict();