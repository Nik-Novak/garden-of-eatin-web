import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OpportunityCreateWithoutApplicationsInputObjectSchema as OpportunityCreateWithoutApplicationsInputObjectSchema } from './OpportunityCreateWithoutApplicationsInput.schema';
import { OpportunityUncheckedCreateWithoutApplicationsInputObjectSchema as OpportunityUncheckedCreateWithoutApplicationsInputObjectSchema } from './OpportunityUncheckedCreateWithoutApplicationsInput.schema';
import { OpportunityCreateOrConnectWithoutApplicationsInputObjectSchema as OpportunityCreateOrConnectWithoutApplicationsInputObjectSchema } from './OpportunityCreateOrConnectWithoutApplicationsInput.schema';
import { OpportunityUpsertWithoutApplicationsInputObjectSchema as OpportunityUpsertWithoutApplicationsInputObjectSchema } from './OpportunityUpsertWithoutApplicationsInput.schema';
import { OpportunityWhereUniqueInputObjectSchema as OpportunityWhereUniqueInputObjectSchema } from './OpportunityWhereUniqueInput.schema';
import { OpportunityUpdateToOneWithWhereWithoutApplicationsInputObjectSchema as OpportunityUpdateToOneWithWhereWithoutApplicationsInputObjectSchema } from './OpportunityUpdateToOneWithWhereWithoutApplicationsInput.schema';
import { OpportunityUpdateWithoutApplicationsInputObjectSchema as OpportunityUpdateWithoutApplicationsInputObjectSchema } from './OpportunityUpdateWithoutApplicationsInput.schema';
import { OpportunityUncheckedUpdateWithoutApplicationsInputObjectSchema as OpportunityUncheckedUpdateWithoutApplicationsInputObjectSchema } from './OpportunityUncheckedUpdateWithoutApplicationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OpportunityCreateWithoutApplicationsInputObjectSchema), z.lazy(() => OpportunityUncheckedCreateWithoutApplicationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OpportunityCreateOrConnectWithoutApplicationsInputObjectSchema).optional(),
  upsert: z.lazy(() => OpportunityUpsertWithoutApplicationsInputObjectSchema).optional(),
  connect: z.lazy(() => OpportunityWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OpportunityUpdateToOneWithWhereWithoutApplicationsInputObjectSchema), z.lazy(() => OpportunityUpdateWithoutApplicationsInputObjectSchema), z.lazy(() => OpportunityUncheckedUpdateWithoutApplicationsInputObjectSchema)]).optional()
}).strict();
export const OpportunityUpdateOneRequiredWithoutApplicationsNestedInputObjectSchema: z.ZodType<Prisma.OpportunityUpdateOneRequiredWithoutApplicationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityUpdateOneRequiredWithoutApplicationsNestedInput>;
export const OpportunityUpdateOneRequiredWithoutApplicationsNestedInputObjectZodSchema = makeSchema();
