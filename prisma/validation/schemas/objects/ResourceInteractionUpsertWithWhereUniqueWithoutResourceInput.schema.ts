import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionWhereUniqueInputObjectSchema as ResourceInteractionWhereUniqueInputObjectSchema } from './ResourceInteractionWhereUniqueInput.schema';
import { ResourceInteractionUpdateWithoutResourceInputObjectSchema as ResourceInteractionUpdateWithoutResourceInputObjectSchema } from './ResourceInteractionUpdateWithoutResourceInput.schema';
import { ResourceInteractionUncheckedUpdateWithoutResourceInputObjectSchema as ResourceInteractionUncheckedUpdateWithoutResourceInputObjectSchema } from './ResourceInteractionUncheckedUpdateWithoutResourceInput.schema';
import { ResourceInteractionCreateWithoutResourceInputObjectSchema as ResourceInteractionCreateWithoutResourceInputObjectSchema } from './ResourceInteractionCreateWithoutResourceInput.schema';
import { ResourceInteractionUncheckedCreateWithoutResourceInputObjectSchema as ResourceInteractionUncheckedCreateWithoutResourceInputObjectSchema } from './ResourceInteractionUncheckedCreateWithoutResourceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceInteractionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ResourceInteractionUpdateWithoutResourceInputObjectSchema), z.lazy(() => ResourceInteractionUncheckedUpdateWithoutResourceInputObjectSchema)]),
  create: z.union([z.lazy(() => ResourceInteractionCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceInteractionUncheckedCreateWithoutResourceInputObjectSchema)])
}).strict();
export const ResourceInteractionUpsertWithWhereUniqueWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceInteractionUpsertWithWhereUniqueWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInteractionUpsertWithWhereUniqueWithoutResourceInput>;
export const ResourceInteractionUpsertWithWhereUniqueWithoutResourceInputObjectZodSchema = makeSchema();
