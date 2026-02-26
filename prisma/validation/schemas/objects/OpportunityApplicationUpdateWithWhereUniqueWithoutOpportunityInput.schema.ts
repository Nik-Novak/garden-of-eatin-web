import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunityApplicationWhereUniqueInputObjectSchema as OpportunityApplicationWhereUniqueInputObjectSchema } from './OpportunityApplicationWhereUniqueInput.schema';
import { OpportunityApplicationUpdateWithoutOpportunityInputObjectSchema as OpportunityApplicationUpdateWithoutOpportunityInputObjectSchema } from './OpportunityApplicationUpdateWithoutOpportunityInput.schema';
import { OpportunityApplicationUncheckedUpdateWithoutOpportunityInputObjectSchema as OpportunityApplicationUncheckedUpdateWithoutOpportunityInputObjectSchema } from './OpportunityApplicationUncheckedUpdateWithoutOpportunityInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OpportunityApplicationUpdateWithoutOpportunityInputObjectSchema), z.lazy(() => OpportunityApplicationUncheckedUpdateWithoutOpportunityInputObjectSchema)])
}).strict();
export const OpportunityApplicationUpdateWithWhereUniqueWithoutOpportunityInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationUpdateWithWhereUniqueWithoutOpportunityInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationUpdateWithWhereUniqueWithoutOpportunityInput>;
export const OpportunityApplicationUpdateWithWhereUniqueWithoutOpportunityInputObjectZodSchema = makeSchema();
