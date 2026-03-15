import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceUpdateWithoutMeal_occurrence_searchesInputObjectSchema as DeviceUpdateWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceUpdateWithoutMeal_occurrence_searchesInput.schema';
import { DeviceUncheckedUpdateWithoutMeal_occurrence_searchesInputObjectSchema as DeviceUncheckedUpdateWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceUncheckedUpdateWithoutMeal_occurrence_searchesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DeviceUpdateWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutMeal_occurrence_searchesInputObjectSchema)])
}).strict();
export const DeviceUpdateToOneWithWhereWithoutMeal_occurrence_searchesInputObjectSchema: z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutMeal_occurrence_searchesInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutMeal_occurrence_searchesInput>;
export const DeviceUpdateToOneWithWhereWithoutMeal_occurrence_searchesInputObjectZodSchema = makeSchema();
