import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceUpdateWithoutMeal_occurrence_searchesInputObjectSchema as DeviceUpdateWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceUpdateWithoutMeal_occurrence_searchesInput.schema';
import { DeviceUncheckedUpdateWithoutMeal_occurrence_searchesInputObjectSchema as DeviceUncheckedUpdateWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceUncheckedUpdateWithoutMeal_occurrence_searchesInput.schema';
import { DeviceCreateWithoutMeal_occurrence_searchesInputObjectSchema as DeviceCreateWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceCreateWithoutMeal_occurrence_searchesInput.schema';
import { DeviceUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema as DeviceUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceUncheckedCreateWithoutMeal_occurrence_searchesInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DeviceUpdateWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutMeal_occurrence_searchesInputObjectSchema)]),
  create: z.union([z.lazy(() => DeviceCreateWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema)]),
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional()
}).strict();
export const DeviceUpsertWithoutMeal_occurrence_searchesInputObjectSchema: z.ZodType<Prisma.DeviceUpsertWithoutMeal_occurrence_searchesInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpsertWithoutMeal_occurrence_searchesInput>;
export const DeviceUpsertWithoutMeal_occurrence_searchesInputObjectZodSchema = makeSchema();
