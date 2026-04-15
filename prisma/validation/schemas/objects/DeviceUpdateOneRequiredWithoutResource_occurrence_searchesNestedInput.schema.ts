import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutResource_occurrence_searchesInputObjectSchema as DeviceCreateWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceCreateWithoutResource_occurrence_searchesInput.schema';
import { DeviceUncheckedCreateWithoutResource_occurrence_searchesInputObjectSchema as DeviceUncheckedCreateWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceUncheckedCreateWithoutResource_occurrence_searchesInput.schema';
import { DeviceCreateOrConnectWithoutResource_occurrence_searchesInputObjectSchema as DeviceCreateOrConnectWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceCreateOrConnectWithoutResource_occurrence_searchesInput.schema';
import { DeviceUpsertWithoutResource_occurrence_searchesInputObjectSchema as DeviceUpsertWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceUpsertWithoutResource_occurrence_searchesInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceUpdateToOneWithWhereWithoutResource_occurrence_searchesInputObjectSchema as DeviceUpdateToOneWithWhereWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceUpdateToOneWithWhereWithoutResource_occurrence_searchesInput.schema';
import { DeviceUpdateWithoutResource_occurrence_searchesInputObjectSchema as DeviceUpdateWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceUpdateWithoutResource_occurrence_searchesInput.schema';
import { DeviceUncheckedUpdateWithoutResource_occurrence_searchesInputObjectSchema as DeviceUncheckedUpdateWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceUncheckedUpdateWithoutResource_occurrence_searchesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutResource_occurrence_searchesInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutResource_occurrence_searchesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutResource_occurrence_searchesInputObjectSchema).optional(),
  upsert: z.lazy(() => DeviceUpsertWithoutResource_occurrence_searchesInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DeviceUpdateToOneWithWhereWithoutResource_occurrence_searchesInputObjectSchema), z.lazy(() => DeviceUpdateWithoutResource_occurrence_searchesInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutResource_occurrence_searchesInputObjectSchema)]).optional()
}).strict();
export const DeviceUpdateOneRequiredWithoutResource_occurrence_searchesNestedInputObjectSchema: z.ZodType<Prisma.DeviceUpdateOneRequiredWithoutResource_occurrence_searchesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateOneRequiredWithoutResource_occurrence_searchesNestedInput>;
export const DeviceUpdateOneRequiredWithoutResource_occurrence_searchesNestedInputObjectZodSchema = makeSchema();
