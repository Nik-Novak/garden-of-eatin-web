import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceUpdateWithoutResource_occurrence_searchesInputObjectSchema as DeviceUpdateWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceUpdateWithoutResource_occurrence_searchesInput.schema';
import { DeviceUncheckedUpdateWithoutResource_occurrence_searchesInputObjectSchema as DeviceUncheckedUpdateWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceUncheckedUpdateWithoutResource_occurrence_searchesInput.schema';
import { DeviceCreateWithoutResource_occurrence_searchesInputObjectSchema as DeviceCreateWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceCreateWithoutResource_occurrence_searchesInput.schema';
import { DeviceUncheckedCreateWithoutResource_occurrence_searchesInputObjectSchema as DeviceUncheckedCreateWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceUncheckedCreateWithoutResource_occurrence_searchesInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DeviceUpdateWithoutResource_occurrence_searchesInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutResource_occurrence_searchesInputObjectSchema)]),
  create: z.union([z.lazy(() => DeviceCreateWithoutResource_occurrence_searchesInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutResource_occurrence_searchesInputObjectSchema)]),
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional()
}).strict();
export const DeviceUpsertWithoutResource_occurrence_searchesInputObjectSchema: z.ZodType<Prisma.DeviceUpsertWithoutResource_occurrence_searchesInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpsertWithoutResource_occurrence_searchesInput>;
export const DeviceUpsertWithoutResource_occurrence_searchesInputObjectZodSchema = makeSchema();
