import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionScalarWhereInputObjectSchema as ResourceInteractionScalarWhereInputObjectSchema } from './ResourceInteractionScalarWhereInput.schema';
import { ResourceInteractionUpdateManyMutationInputObjectSchema as ResourceInteractionUpdateManyMutationInputObjectSchema } from './ResourceInteractionUpdateManyMutationInput.schema';
import { ResourceInteractionUncheckedUpdateManyWithoutDeviceInputObjectSchema as ResourceInteractionUncheckedUpdateManyWithoutDeviceInputObjectSchema } from './ResourceInteractionUncheckedUpdateManyWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceInteractionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ResourceInteractionUpdateManyMutationInputObjectSchema), z.lazy(() => ResourceInteractionUncheckedUpdateManyWithoutDeviceInputObjectSchema)])
}).strict();
export const ResourceInteractionUpdateManyWithWhereWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ResourceInteractionUpdateManyWithWhereWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionUpdateManyWithWhereWithoutDeviceInput>;
export const ResourceInteractionUpdateManyWithWhereWithoutDeviceInputObjectZodSchema = makeSchema();
