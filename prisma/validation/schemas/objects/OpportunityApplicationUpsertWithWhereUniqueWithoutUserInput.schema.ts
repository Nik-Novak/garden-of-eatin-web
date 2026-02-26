import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityApplicationWhereUniqueInputObjectSchema as OpportunityApplicationWhereUniqueInputObjectSchema } from './OpportunityApplicationWhereUniqueInput.schema';
import { OpportunityApplicationUpdateWithoutUserInputObjectSchema as OpportunityApplicationUpdateWithoutUserInputObjectSchema } from './OpportunityApplicationUpdateWithoutUserInput.schema';
import { OpportunityApplicationUncheckedUpdateWithoutUserInputObjectSchema as OpportunityApplicationUncheckedUpdateWithoutUserInputObjectSchema } from './OpportunityApplicationUncheckedUpdateWithoutUserInput.schema';
import { OpportunityApplicationCreateWithoutUserInputObjectSchema as OpportunityApplicationCreateWithoutUserInputObjectSchema } from './OpportunityApplicationCreateWithoutUserInput.schema';
import { OpportunityApplicationUncheckedCreateWithoutUserInputObjectSchema as OpportunityApplicationUncheckedCreateWithoutUserInputObjectSchema } from './OpportunityApplicationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OpportunityApplicationUpdateWithoutUserInputObjectSchema), z.lazy(() => OpportunityApplicationUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => OpportunityApplicationCreateWithoutUserInputObjectSchema), z.lazy(() => OpportunityApplicationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const OpportunityApplicationUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationUpsertWithWhereUniqueWithoutUserInput>;
export const OpportunityApplicationUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
