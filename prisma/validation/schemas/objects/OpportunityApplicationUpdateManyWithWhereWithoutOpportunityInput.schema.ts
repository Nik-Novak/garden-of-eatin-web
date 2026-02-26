import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityApplicationScalarWhereInputObjectSchema as OpportunityApplicationScalarWhereInputObjectSchema } from './OpportunityApplicationScalarWhereInput.schema';
import { OpportunityApplicationUpdateManyMutationInputObjectSchema as OpportunityApplicationUpdateManyMutationInputObjectSchema } from './OpportunityApplicationUpdateManyMutationInput.schema';
import { OpportunityApplicationUncheckedUpdateManyWithoutOpportunityInputObjectSchema as OpportunityApplicationUncheckedUpdateManyWithoutOpportunityInputObjectSchema } from './OpportunityApplicationUncheckedUpdateManyWithoutOpportunityInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OpportunityApplicationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OpportunityApplicationUpdateManyMutationInputObjectSchema), z.lazy(() => OpportunityApplicationUncheckedUpdateManyWithoutOpportunityInputObjectSchema)])
}).strict();
export const OpportunityApplicationUpdateManyWithWhereWithoutOpportunityInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationUpdateManyWithWhereWithoutOpportunityInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationUpdateManyWithWhereWithoutOpportunityInput>;
export const OpportunityApplicationUpdateManyWithWhereWithoutOpportunityInputObjectZodSchema = makeSchema();
