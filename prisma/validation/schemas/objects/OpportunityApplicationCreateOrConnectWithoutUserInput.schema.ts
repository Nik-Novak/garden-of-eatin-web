import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunityApplicationWhereUniqueInputObjectSchema as OpportunityApplicationWhereUniqueInputObjectSchema } from './OpportunityApplicationWhereUniqueInput.schema';
import { OpportunityApplicationCreateWithoutUserInputObjectSchema as OpportunityApplicationCreateWithoutUserInputObjectSchema } from './OpportunityApplicationCreateWithoutUserInput.schema';
import { OpportunityApplicationUncheckedCreateWithoutUserInputObjectSchema as OpportunityApplicationUncheckedCreateWithoutUserInputObjectSchema } from './OpportunityApplicationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OpportunityApplicationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OpportunityApplicationCreateWithoutUserInputObjectSchema), z.lazy(() => OpportunityApplicationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const OpportunityApplicationCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationCreateOrConnectWithoutUserInput>;
export const OpportunityApplicationCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
