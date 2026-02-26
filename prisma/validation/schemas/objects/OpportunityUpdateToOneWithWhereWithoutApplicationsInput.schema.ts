import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityWhereInputObjectSchema as OpportunityWhereInputObjectSchema } from './OpportunityWhereInput.schema';
import { OpportunityUpdateWithoutApplicationsInputObjectSchema as OpportunityUpdateWithoutApplicationsInputObjectSchema } from './OpportunityUpdateWithoutApplicationsInput.schema';
import { OpportunityUncheckedUpdateWithoutApplicationsInputObjectSchema as OpportunityUncheckedUpdateWithoutApplicationsInputObjectSchema } from './OpportunityUncheckedUpdateWithoutApplicationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OpportunityWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OpportunityUpdateWithoutApplicationsInputObjectSchema), z.lazy(() => OpportunityUncheckedUpdateWithoutApplicationsInputObjectSchema)])
}).strict();
export const OpportunityUpdateToOneWithWhereWithoutApplicationsInputObjectSchema: z.ZodType<Prisma.OpportunityUpdateToOneWithWhereWithoutApplicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityUpdateToOneWithWhereWithoutApplicationsInput>;
export const OpportunityUpdateToOneWithWhereWithoutApplicationsInputObjectZodSchema = makeSchema();
