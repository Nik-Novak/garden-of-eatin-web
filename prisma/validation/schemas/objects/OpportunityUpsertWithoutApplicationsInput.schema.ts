import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityUpdateWithoutApplicationsInputObjectSchema as OpportunityUpdateWithoutApplicationsInputObjectSchema } from './OpportunityUpdateWithoutApplicationsInput.schema';
import { OpportunityUncheckedUpdateWithoutApplicationsInputObjectSchema as OpportunityUncheckedUpdateWithoutApplicationsInputObjectSchema } from './OpportunityUncheckedUpdateWithoutApplicationsInput.schema';
import { OpportunityCreateWithoutApplicationsInputObjectSchema as OpportunityCreateWithoutApplicationsInputObjectSchema } from './OpportunityCreateWithoutApplicationsInput.schema';
import { OpportunityUncheckedCreateWithoutApplicationsInputObjectSchema as OpportunityUncheckedCreateWithoutApplicationsInputObjectSchema } from './OpportunityUncheckedCreateWithoutApplicationsInput.schema';
import { OpportunityWhereInputObjectSchema as OpportunityWhereInputObjectSchema } from './OpportunityWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OpportunityUpdateWithoutApplicationsInputObjectSchema), z.lazy(() => OpportunityUncheckedUpdateWithoutApplicationsInputObjectSchema)]),
  create: z.union([z.lazy(() => OpportunityCreateWithoutApplicationsInputObjectSchema), z.lazy(() => OpportunityUncheckedCreateWithoutApplicationsInputObjectSchema)]),
  where: z.lazy(() => OpportunityWhereInputObjectSchema).optional()
}).strict();
export const OpportunityUpsertWithoutApplicationsInputObjectSchema: z.ZodType<Prisma.OpportunityUpsertWithoutApplicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityUpsertWithoutApplicationsInput>;
export const OpportunityUpsertWithoutApplicationsInputObjectZodSchema = makeSchema();
