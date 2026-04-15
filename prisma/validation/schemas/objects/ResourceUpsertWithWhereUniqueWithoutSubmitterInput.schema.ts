import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './ResourceWhereUniqueInput.schema';
import { ResourceUpdateWithoutSubmitterInputObjectSchema as ResourceUpdateWithoutSubmitterInputObjectSchema } from './ResourceUpdateWithoutSubmitterInput.schema';
import { ResourceUncheckedUpdateWithoutSubmitterInputObjectSchema as ResourceUncheckedUpdateWithoutSubmitterInputObjectSchema } from './ResourceUncheckedUpdateWithoutSubmitterInput.schema';
import { ResourceCreateWithoutSubmitterInputObjectSchema as ResourceCreateWithoutSubmitterInputObjectSchema } from './ResourceCreateWithoutSubmitterInput.schema';
import { ResourceUncheckedCreateWithoutSubmitterInputObjectSchema as ResourceUncheckedCreateWithoutSubmitterInputObjectSchema } from './ResourceUncheckedCreateWithoutSubmitterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ResourceUpdateWithoutSubmitterInputObjectSchema), z.lazy(() => ResourceUncheckedUpdateWithoutSubmitterInputObjectSchema)]),
  create: z.union([z.lazy(() => ResourceCreateWithoutSubmitterInputObjectSchema), z.lazy(() => ResourceUncheckedCreateWithoutSubmitterInputObjectSchema)])
}).strict();
export const ResourceUpsertWithWhereUniqueWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.ResourceUpsertWithWhereUniqueWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpsertWithWhereUniqueWithoutSubmitterInput>;
export const ResourceUpsertWithWhereUniqueWithoutSubmitterInputObjectZodSchema = makeSchema();
