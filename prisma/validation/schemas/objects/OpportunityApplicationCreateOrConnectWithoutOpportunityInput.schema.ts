import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityApplicationWhereUniqueInputObjectSchema as OpportunityApplicationWhereUniqueInputObjectSchema } from './OpportunityApplicationWhereUniqueInput.schema';
import { OpportunityApplicationCreateWithoutOpportunityInputObjectSchema as OpportunityApplicationCreateWithoutOpportunityInputObjectSchema } from './OpportunityApplicationCreateWithoutOpportunityInput.schema';
import { OpportunityApplicationUncheckedCreateWithoutOpportunityInputObjectSchema as OpportunityApplicationUncheckedCreateWithoutOpportunityInputObjectSchema } from './OpportunityApplicationUncheckedCreateWithoutOpportunityInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OpportunityApplicationCreateWithoutOpportunityInputObjectSchema), z.lazy(() => OpportunityApplicationUncheckedCreateWithoutOpportunityInputObjectSchema)])
}).strict();
export const OpportunityApplicationCreateOrConnectWithoutOpportunityInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationCreateOrConnectWithoutOpportunityInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationCreateOrConnectWithoutOpportunityInput>;
export const OpportunityApplicationCreateOrConnectWithoutOpportunityInputObjectZodSchema = makeSchema();
