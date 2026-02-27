import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OpportunityApplicationWhereUniqueInputObjectSchema as OpportunityApplicationWhereUniqueInputObjectSchema } from './OpportunityApplicationWhereUniqueInput.schema';
import { OpportunityApplicationUpdateWithoutOpportunityInputObjectSchema as OpportunityApplicationUpdateWithoutOpportunityInputObjectSchema } from './OpportunityApplicationUpdateWithoutOpportunityInput.schema';
import { OpportunityApplicationUncheckedUpdateWithoutOpportunityInputObjectSchema as OpportunityApplicationUncheckedUpdateWithoutOpportunityInputObjectSchema } from './OpportunityApplicationUncheckedUpdateWithoutOpportunityInput.schema';
import { OpportunityApplicationCreateWithoutOpportunityInputObjectSchema as OpportunityApplicationCreateWithoutOpportunityInputObjectSchema } from './OpportunityApplicationCreateWithoutOpportunityInput.schema';
import { OpportunityApplicationUncheckedCreateWithoutOpportunityInputObjectSchema as OpportunityApplicationUncheckedCreateWithoutOpportunityInputObjectSchema } from './OpportunityApplicationUncheckedCreateWithoutOpportunityInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OpportunityApplicationUpdateWithoutOpportunityInputObjectSchema), z.lazy(() => OpportunityApplicationUncheckedUpdateWithoutOpportunityInputObjectSchema)]),
  create: z.union([z.lazy(() => OpportunityApplicationCreateWithoutOpportunityInputObjectSchema), z.lazy(() => OpportunityApplicationUncheckedCreateWithoutOpportunityInputObjectSchema)])
}).strict();
export const OpportunityApplicationUpsertWithWhereUniqueWithoutOpportunityInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationUpsertWithWhereUniqueWithoutOpportunityInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationUpsertWithWhereUniqueWithoutOpportunityInput>;
export const OpportunityApplicationUpsertWithWhereUniqueWithoutOpportunityInputObjectZodSchema = makeSchema();
