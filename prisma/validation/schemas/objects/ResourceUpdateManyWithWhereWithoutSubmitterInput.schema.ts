import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceScalarWhereInputObjectSchema as ResourceScalarWhereInputObjectSchema } from './ResourceScalarWhereInput.schema';
import { ResourceUpdateManyMutationInputObjectSchema as ResourceUpdateManyMutationInputObjectSchema } from './ResourceUpdateManyMutationInput.schema';
import { ResourceUncheckedUpdateManyWithoutSubmitterInputObjectSchema as ResourceUncheckedUpdateManyWithoutSubmitterInputObjectSchema } from './ResourceUncheckedUpdateManyWithoutSubmitterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ResourceUpdateManyMutationInputObjectSchema), z.lazy(() => ResourceUncheckedUpdateManyWithoutSubmitterInputObjectSchema)])
}).strict();
export const ResourceUpdateManyWithWhereWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.ResourceUpdateManyWithWhereWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpdateManyWithWhereWithoutSubmitterInput>;
export const ResourceUpdateManyWithWhereWithoutSubmitterInputObjectZodSchema = makeSchema();
