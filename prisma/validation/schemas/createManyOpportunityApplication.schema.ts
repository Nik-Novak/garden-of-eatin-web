import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { OpportunityApplicationCreateManyInputObjectSchema as OpportunityApplicationCreateManyInputObjectSchema } from './objects/OpportunityApplicationCreateManyInput.schema';

export const OpportunityApplicationCreateManySchema: z.ZodType<Prisma.OpportunityApplicationCreateManyArgs> = z.object({ data: z.union([ OpportunityApplicationCreateManyInputObjectSchema, z.array(OpportunityApplicationCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.OpportunityApplicationCreateManyArgs>;

export const OpportunityApplicationCreateManyZodSchema = z.object({ data: z.union([ OpportunityApplicationCreateManyInputObjectSchema, z.array(OpportunityApplicationCreateManyInputObjectSchema) ]),  }).strict();