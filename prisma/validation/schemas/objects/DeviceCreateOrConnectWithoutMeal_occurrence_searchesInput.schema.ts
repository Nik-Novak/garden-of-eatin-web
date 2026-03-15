import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceCreateWithoutMeal_occurrence_searchesInputObjectSchema as DeviceCreateWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceCreateWithoutMeal_occurrence_searchesInput.schema';
import { DeviceUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema as DeviceUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceUncheckedCreateWithoutMeal_occurrence_searchesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeviceCreateWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema)])
}).strict();
export const DeviceCreateOrConnectWithoutMeal_occurrence_searchesInputObjectSchema: z.ZodType<Prisma.DeviceCreateOrConnectWithoutMeal_occurrence_searchesInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateOrConnectWithoutMeal_occurrence_searchesInput>;
export const DeviceCreateOrConnectWithoutMeal_occurrence_searchesInputObjectZodSchema = makeSchema();
