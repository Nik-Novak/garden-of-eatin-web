import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const OpportunityWhereUniqueInputObjectSchema: z.ZodType<Prisma.OpportunityWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityWhereUniqueInput>;
export const OpportunityWhereUniqueInputObjectZodSchema = makeSchema();
