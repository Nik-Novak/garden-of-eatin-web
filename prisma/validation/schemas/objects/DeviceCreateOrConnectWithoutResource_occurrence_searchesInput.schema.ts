import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceCreateWithoutResource_occurrence_searchesInputObjectSchema as DeviceCreateWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceCreateWithoutResource_occurrence_searchesInput.schema';
import { DeviceUncheckedCreateWithoutResource_occurrence_searchesInputObjectSchema as DeviceUncheckedCreateWithoutResource_occurrence_searchesInputObjectSchema } from './DeviceUncheckedCreateWithoutResource_occurrence_searchesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeviceCreateWithoutResource_occurrence_searchesInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutResource_occurrence_searchesInputObjectSchema)])
}).strict();
export const DeviceCreateOrConnectWithoutResource_occurrence_searchesInputObjectSchema: z.ZodType<Prisma.DeviceCreateOrConnectWithoutResource_occurrence_searchesInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateOrConnectWithoutResource_occurrence_searchesInput>;
export const DeviceCreateOrConnectWithoutResource_occurrence_searchesInputObjectZodSchema = makeSchema();
