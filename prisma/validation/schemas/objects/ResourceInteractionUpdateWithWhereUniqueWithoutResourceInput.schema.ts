import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionWhereUniqueInputObjectSchema as ResourceInteractionWhereUniqueInputObjectSchema } from './ResourceInteractionWhereUniqueInput.schema';
import { ResourceInteractionUpdateWithoutResourceInputObjectSchema as ResourceInteractionUpdateWithoutResourceInputObjectSchema } from './ResourceInteractionUpdateWithoutResourceInput.schema';
import { ResourceInteractionUncheckedUpdateWithoutResourceInputObjectSchema as ResourceInteractionUncheckedUpdateWithoutResourceInputObjectSchema } from './ResourceInteractionUncheckedUpdateWithoutResourceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ResourceInteractionUpdateWithoutResourceInputObjectSchema), z.lazy(() => ResourceInteractionUncheckedUpdateWithoutResourceInputObjectSchema)])
}).strict();
export const ResourceInteractionUpdateWithWhereUniqueWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceInteractionUpdateWithWhereUniqueWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionUpdateWithWhereUniqueWithoutResourceInput>;
export const ResourceInteractionUpdateWithWhereUniqueWithoutResourceInputObjectZodSchema = makeSchema();
