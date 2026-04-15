import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './ResourceWhereUniqueInput.schema';
import { ResourceUpdateWithoutSubmitterInputObjectSchema as ResourceUpdateWithoutSubmitterInputObjectSchema } from './ResourceUpdateWithoutSubmitterInput.schema';
import { ResourceUncheckedUpdateWithoutSubmitterInputObjectSchema as ResourceUncheckedUpdateWithoutSubmitterInputObjectSchema } from './ResourceUncheckedUpdateWithoutSubmitterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ResourceUpdateWithoutSubmitterInputObjectSchema), z.lazy(() => ResourceUncheckedUpdateWithoutSubmitterInputObjectSchema)])
}).strict();
export const ResourceUpdateWithWhereUniqueWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.ResourceUpdateWithWhereUniqueWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpdateWithWhereUniqueWithoutSubmitterInput>;
export const ResourceUpdateWithWhereUniqueWithoutSubmitterInputObjectZodSchema = makeSchema();
