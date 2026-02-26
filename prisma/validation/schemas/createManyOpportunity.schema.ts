import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OpportunityCreateManyInputObjectSchema as OpportunityCreateManyInputObjectSchema } from './objects/OpportunityCreateManyInput.schema';

export const OpportunityCreateManySchema: z.ZodType<Prisma.OpportunityCreateManyArgs> = z.object({ data: z.union([ OpportunityCreateManyInputObjectSchema, z.array(OpportunityCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.OpportunityCreateManyArgs>;

export const OpportunityCreateManyZodSchema = z.object({ data: z.union([ OpportunityCreateManyInputObjectSchema, z.array(OpportunityCreateManyInputObjectSchema) ]),  }).strict();