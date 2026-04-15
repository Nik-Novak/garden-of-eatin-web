import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceWhereUniqueInputObjectSchema as ResourceOccurrenceWhereUniqueInputObjectSchema } from './ResourceOccurrenceWhereUniqueInput.schema';
import { ResourceOccurrenceUpdateWithoutResourceInputObjectSchema as ResourceOccurrenceUpdateWithoutResourceInputObjectSchema } from './ResourceOccurrenceUpdateWithoutResourceInput.schema';
import { ResourceOccurrenceUncheckedUpdateWithoutResourceInputObjectSchema as ResourceOccurrenceUncheckedUpdateWithoutResourceInputObjectSchema } from './ResourceOccurrenceUncheckedUpdateWithoutResourceInput.schema';
import { ResourceOccurrenceCreateWithoutResourceInputObjectSchema as ResourceOccurrenceCreateWithoutResourceInputObjectSchema } from './ResourceOccurrenceCreateWithoutResourceInput.schema';
import { ResourceOccurrenceUncheckedCreateWithoutResourceInputObjectSchema as ResourceOccurrenceUncheckedCreateWithoutResourceInputObjectSchema } from './ResourceOccurrenceUncheckedCreateWithoutResourceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceOccurrenceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ResourceOccurrenceUpdateWithoutResourceInputObjectSchema), z.lazy(() => ResourceOccurrenceUncheckedUpdateWithoutResourceInputObjectSchema)]),
  create: z.union([z.lazy(() => ResourceOccurrenceCreateWithoutResourceInputObjectSchema), z.lazy(() => ResourceOccurrenceUncheckedCreateWithoutResourceInputObjectSchema)])
}).strict();
export const ResourceOccurrenceUpsertWithWhereUniqueWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceUpsertWithWhereUniqueWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceUpsertWithWhereUniqueWithoutResourceInput>;
export const ResourceOccurrenceUpsertWithWhereUniqueWithoutResourceInputObjectZodSchema = makeSchema();
