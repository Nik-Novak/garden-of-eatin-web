import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OpportunityCreateWithoutApplicationsInputObjectSchema as OpportunityCreateWithoutApplicationsInputObjectSchema } from './OpportunityCreateWithoutApplicationsInput.schema';
import { OpportunityUncheckedCreateWithoutApplicationsInputObjectSchema as OpportunityUncheckedCreateWithoutApplicationsInputObjectSchema } from './OpportunityUncheckedCreateWithoutApplicationsInput.schema';
import { OpportunityCreateOrConnectWithoutApplicationsInputObjectSchema as OpportunityCreateOrConnectWithoutApplicationsInputObjectSchema } from './OpportunityCreateOrConnectWithoutApplicationsInput.schema';
import { OpportunityWhereUniqueInputObjectSchema as OpportunityWhereUniqueInputObjectSchema } from './OpportunityWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OpportunityCreateWithoutApplicationsInputObjectSchema), z.lazy(() => OpportunityUncheckedCreateWithoutApplicationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OpportunityCreateOrConnectWithoutApplicationsInputObjectSchema).optional(),
  connect: z.lazy(() => OpportunityWhereUniqueInputObjectSchema).optional()
}).strict();
export const OpportunityCreateNestedOneWithoutApplicationsInputObjectSchema: z.ZodType<Prisma.OpportunityCreateNestedOneWithoutApplicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityCreateNestedOneWithoutApplicationsInput>;
export const OpportunityCreateNestedOneWithoutApplicationsInputObjectZodSchema = makeSchema();
