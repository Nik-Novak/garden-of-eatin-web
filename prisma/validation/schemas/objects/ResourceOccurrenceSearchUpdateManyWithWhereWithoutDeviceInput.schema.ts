import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchScalarWhereInputObjectSchema as ResourceOccurrenceSearchScalarWhereInputObjectSchema } from './ResourceOccurrenceSearchScalarWhereInput.schema';
import { ResourceOccurrenceSearchUpdateManyMutationInputObjectSchema as ResourceOccurrenceSearchUpdateManyMutationInputObjectSchema } from './ResourceOccurrenceSearchUpdateManyMutationInput.schema';
import { ResourceOccurrenceSearchUncheckedUpdateManyWithoutDeviceInputObjectSchema as ResourceOccurrenceSearchUncheckedUpdateManyWithoutDeviceInputObjectSchema } from './ResourceOccurrenceSearchUncheckedUpdateManyWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceOccurrenceSearchScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ResourceOccurrenceSearchUpdateManyMutationInputObjectSchema), z.lazy(() => ResourceOccurrenceSearchUncheckedUpdateManyWithoutDeviceInputObjectSchema)])
}).strict();
export const ResourceOccurrenceSearchUpdateManyWithWhereWithoutDeviceInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchUpdateManyWithWhereWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchUpdateManyWithWhereWithoutDeviceInput>;
export const ResourceOccurrenceSearchUpdateManyWithWhereWithoutDeviceInputObjectZodSchema = makeSchema();
