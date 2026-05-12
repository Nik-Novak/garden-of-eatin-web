import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceUpdateWithoutResource_occurrence_searchesInputObjectSchema as DeviceUpdateWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceUpdateWithoutResource_occurrence_searchesInput.schema';
import { DeviceUncheckedUpdateWithoutResource_occurrence_searchesInputObjectSchema as DeviceUncheckedUpdateWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceUncheckedUpdateWithoutResource_occurrence_searchesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DeviceUpdateWithoutResource_occurrence_searchesInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutResource_occurrence_searchesInputObjectSchema)])
}).strict();
export const DeviceUpdateToOneWithWhereWithoutResource_occurrence_searchesInputObjectSchema: z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutResource_occurrence_searchesInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutResource_occurrence_searchesInput>;
export const DeviceUpdateToOneWithWhereWithoutResource_occurrence_searchesInputObjectZodSchema = makeSchema();
