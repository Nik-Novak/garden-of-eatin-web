import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityApplicationScalarWhereInputObjectSchema as OpportunityApplicationScalarWhereInputObjectSchema } from './OpportunityApplicationScalarWhereInput.schema';
import { OpportunityApplicationUpdateManyMutationInputObjectSchema as OpportunityApplicationUpdateManyMutationInputObjectSchema } from './OpportunityApplicationUpdateManyMutationInput.schema';
import { OpportunityApplicationUncheckedUpdateManyWithoutUserInputObjectSchema as OpportunityApplicationUncheckedUpdateManyWithoutUserInputObjectSchema } from './OpportunityApplicationUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OpportunityApplicationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OpportunityApplicationUpdateManyMutationInputObjectSchema), z.lazy(() => OpportunityApplicationUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const OpportunityApplicationUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationUpdateManyWithWhereWithoutUserInput>;
export const OpportunityApplicationUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
