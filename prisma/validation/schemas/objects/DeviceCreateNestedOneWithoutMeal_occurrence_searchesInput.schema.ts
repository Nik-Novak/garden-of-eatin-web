import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutMeal_occurrence_searchesInputObjectSchema as DeviceCreateWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceCreateWithoutMeal_occurrence_searchesInput.schema';
import { DeviceUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema as DeviceUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceUncheckedCreateWithoutMeal_occurrence_searchesInput.schema';
import { DeviceCreateOrConnectWithoutMeal_occurrence_searchesInputObjectSchema as DeviceCreateOrConnectWithoutMeal_occurrence_searchesInputObjectSchema } from './DeviceCreateOrConnectWithoutMeal_occurrence_searchesInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutMeal_occurrence_searchesInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutMeal_occurrence_searchesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutMeal_occurrence_searchesInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional()
}).strict();
export const DeviceCreateNestedOneWithoutMeal_occurrence_searchesInputObjectSchema: z.ZodType<Prisma.DeviceCreateNestedOneWithoutMeal_occurrence_searchesInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateNestedOneWithoutMeal_occurrence_searchesInput>;
export const DeviceCreateNestedOneWithoutMeal_occurrence_searchesInputObjectZodSchema = makeSchema();
