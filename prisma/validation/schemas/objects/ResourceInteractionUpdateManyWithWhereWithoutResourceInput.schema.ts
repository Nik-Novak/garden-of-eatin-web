import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionScalarWhereInputObjectSchema as ResourceInteractionScalarWhereInputObjectSchema } from './ResourceInteractionScalarWhereInput.schema';
import { ResourceInteractionUpdateManyMutationInputObjectSchema as ResourceInteractionUpdateManyMutationInputObjectSchema } from './ResourceInteractionUpdateManyMutationInput.schema';
import { ResourceInteractionUncheckedUpdateManyWithoutResourceInputObjectSchema as ResourceInteractionUncheckedUpdateManyWithoutResourceInputObjectSchema } from './ResourceInteractionUncheckedUpdateManyWithoutResourceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceInteractionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ResourceInteractionUpdateManyMutationInputObjectSchema), z.lazy(() => ResourceInteractionUncheckedUpdateManyWithoutResourceInputObjectSchema)])
}).strict();
export const ResourceInteractionUpdateManyWithWhereWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceInteractionUpdateManyWithWhereWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionUpdateManyWithWhereWithoutResourceInput>;
export const ResourceInteractionUpdateManyWithWhereWithoutResourceInputObjectZodSchema = makeSchema();
