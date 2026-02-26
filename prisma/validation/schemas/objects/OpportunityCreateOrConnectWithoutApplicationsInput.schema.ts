import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunityWhereUniqueInputObjectSchema as OpportunityWhereUniqueInputObjectSchema } from './OpportunityWhereUniqueInput.schema';
import { OpportunityCreateWithoutApplicationsInputObjectSchema as OpportunityCreateWithoutApplicationsInputObjectSchema } from './OpportunityCreateWithoutApplicationsInput.schema';
import { OpportunityUncheckedCreateWithoutApplicationsInputObjectSchema as OpportunityUncheckedCreateWithoutApplicationsInputObjectSchema } from './OpportunityUncheckedCreateWithoutApplicationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OpportunityWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OpportunityCreateWithoutApplicationsInputObjectSchema), z.lazy(() => OpportunityUncheckedCreateWithoutApplicationsInputObjectSchema)])
}).strict();
export const OpportunityCreateOrConnectWithoutApplicationsInputObjectSchema: z.ZodType<Prisma.OpportunityCreateOrConnectWithoutApplicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityCreateOrConnectWithoutApplicationsInput>;
export const OpportunityCreateOrConnectWithoutApplicationsInputObjectZodSchema = makeSchema();
