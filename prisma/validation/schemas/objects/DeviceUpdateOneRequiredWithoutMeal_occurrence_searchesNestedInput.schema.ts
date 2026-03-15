import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutMeal_occurrence_searchesInputObjectSchema as DeviceCreateWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceCreateWithoutMeal_occurrence_searchesInput.schema';
import { DeviceUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema as DeviceUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceUncheckedCreateWithoutMeal_occurrence_searchesInput.schema';
import { DeviceCreateOrConnectWithoutMeal_occurrence_searchesInputObjectSchema as DeviceCreateOrConnectWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceCreateOrConnectWithoutMeal_occurrence_searchesInput.schema';
import { DeviceUpsertWithoutMeal_occurrence_searchesInputObjectSchema as DeviceUpsertWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceUpsertWithoutMeal_occurrence_searchesInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceUpdateToOneWithWhereWithoutMeal_occurrence_searchesInputObjectSchema as DeviceUpdateToOneWithWhereWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceUpdateToOneWithWhereWithoutMeal_occurrence_searchesInput.schema';
import { DeviceUpdateWithoutMeal_occurrence_searchesInputObjectSchema as DeviceUpdateWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceUpdateWithoutMeal_occurrence_searchesInput.schema';
import { DeviceUncheckedUpdateWithoutMeal_occurrence_searchesInputObjectSchema as DeviceUncheckedUpdateWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceUncheckedUpdateWithoutMeal_occurrence_searchesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutMeal_occurrence_searchesInputObjectSchema).optional(),
  upsert: z.lazy(() => DeviceUpsertWithoutMeal_occurrence_searchesInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DeviceUpdateToOneWithWhereWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => DeviceUpdateWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutMeal_occurrence_searchesInputObjectSchema)]).optional()
}).strict();
export const DeviceUpdateOneRequiredWithoutMeal_occurrence_searchesNestedInputObjectSchema: z.ZodType<Prisma.DeviceUpdateOneRequiredWithoutMeal_occurrence_searchesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateOneRequiredWithoutMeal_occurrence_searchesNestedInput>;
export const DeviceUpdateOneRequiredWithoutMeal_occurrence_searchesNestedInputObjectZodSchema = makeSchema();
