import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceScalarWhereInputObjectSchema as ResourceOccurrenceScalarWhereInputObjectSchema } from './ResourceOccurrenceScalarWhereInput.schema';
import { ResourceOccurrenceUpdateManyMutationInputObjectSchema as ResourceOccurrenceUpdateManyMutationInputObjectSchema } from './ResourceOccurrenceUpdateManyMutationInput.schema';
import { ResourceOccurrenceUncheckedUpdateManyWithoutResourceInputObjectSchema as ResourceOccurrenceUncheckedUpdateManyWithoutResourceInputObjectSchema } from './ResourceOccurrenceUncheckedUpdateManyWithoutResourceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceOccurrenceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ResourceOccurrenceUpdateManyMutationInputObjectSchema), z.lazy(() => ResourceOccurrenceUncheckedUpdateManyWithoutResourceInputObjectSchema)])
}).strict();
export const ResourceOccurrenceUpdateManyWithWhereWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceUpdateManyWithWhereWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceUpdateManyWithWhereWithoutResourceInput>;
export const ResourceOccurrenceUpdateManyWithWhereWithoutResourceInputObjectZodSchema = makeSchema();
