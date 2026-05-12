import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceWhereUniqueInputObjectSchema as ResourceWhereUniqueInputObjectSchema } from './ResourceWhereUniqueInput.schema';
import { ResourceCreateWithoutSubmitterInputObjectSchema as ResourceCreateWithoutSubmitterInputObjectSchema } from './ResourceCreateWithoutSubmitterInput.schema';
import { ResourceUncheckedCreateWithoutSubmitterInputObjectSchema as ResourceUncheckedCreateWithoutSubmitterInputObjectSchema } from './ResourceUncheckedCreateWithoutSubmitterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ResourceCreateWithoutSubmitterInputObjectSchema), z.lazy(() => ResourceUncheckedCreateWithoutSubmitterInputObjectSchema)])
}).strict();
export const ResourceCreateOrConnectWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.ResourceCreateOrConnectWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreateOrConnectWithoutSubmitterInput>;
export const ResourceCreateOrConnectWithoutSubmitterInputObjectZodSchema = makeSchema();
