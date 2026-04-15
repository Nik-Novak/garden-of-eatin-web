import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutResource_occurrence_searchesInputObjectSchema as DeviceCreateWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceCreateWithoutResource_occurrence_searchesInput.schema';
import { DeviceUncheckedCreateWithoutResource_occurrence_searchesInputObjectSchema as DeviceUncheckedCreateWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceUncheckedCreateWithoutResource_occurrence_searchesInput.schema';
import { DeviceCreateOrConnectWithoutResource_occurrence_searchesInputObjectSchema as DeviceCreateOrConnectWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceCreateOrConnectWithoutResource_occurrence_searchesInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutResource_occurrence_searchesInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutResource_occurrence_searchesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutResource_occurrence_searchesInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional()
}).strict();
export const DeviceCreateNestedOneWithoutResource_occurrence_searchesInputObjectSchema: z.ZodType<Prisma.DeviceCreateNestedOneWithoutResource_occurrence_searchesInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateNestedOneWithoutResource_occurrence_searchesInput>;
export const DeviceCreateNestedOneWithoutResource_occurrence_searchesInputObjectZodSchema = makeSchema();
