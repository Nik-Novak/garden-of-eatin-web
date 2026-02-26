import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityApplicationWhereUniqueInputObjectSchema as OpportunityApplicationWhereUniqueInputObjectSchema } from './OpportunityApplicationWhereUniqueInput.schema';
import { OpportunityApplicationUpdateWithoutUserInputObjectSchema as OpportunityApplicationUpdateWithoutUserInputObjectSchema } from './OpportunityApplicationUpdateWithoutUserInput.schema';
import { OpportunityApplicationUncheckedUpdateWithoutUserInputObjectSchema as OpportunityApplicationUncheckedUpdateWithoutUserInputObjectSchema } from './OpportunityApplicationUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OpportunityApplicationUpdateWithoutUserInputObjectSchema), z.lazy(() => OpportunityApplicationUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const OpportunityApplicationUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationUpdateWithWhereUniqueWithoutUserInput>;
export const OpportunityApplicationUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
