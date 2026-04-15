import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceWhereUniqueInputObjectSchema as ResourceOccurrenceWhereUniqueInputObjectSchema } from './ResourceOccurrenceWhereUniqueInput.schema';
import { ResourceOccurrenceUpdateWithoutResourceInputObjectSchema as ResourceOccurrenceUpdateWithoutResourceInputObjectSchema } from './ResourceOccurrenceUpdateWithoutResourceInput.schema';
import { ResourceOccurrenceUncheckedUpdateWithoutResourceInputObjectSchema as ResourceOccurrenceUncheckedUpdateWithoutResourceInputObjectSchema } from './ResourceOccurrenceUncheckedUpdateWithoutResourceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceOccurrenceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ResourceOccurrenceUpdateWithoutResourceInputObjectSchema), z.lazy(() => ResourceOccurrenceUncheckedUpdateWithoutResourceInputObjectSchema)])
}).strict();
export const ResourceOccurrenceUpdateWithWhereUniqueWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceUpdateWithWhereUniqueWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceUpdateWithWhereUniqueWithoutResourceInput>;
export const ResourceOccurrenceUpdateWithWhereUniqueWithoutResourceInputObjectZodSchema = makeSchema();
