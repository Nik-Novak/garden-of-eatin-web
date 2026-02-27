import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutSubmitted_mealsInputObjectSchema as DeviceCreateWithoutSubmitted_mealsInputObjectSchema } from './DeviceCreateWithoutSubmitted_mealsInput.schema';
import { DeviceUncheckedCreateWithoutSubmitted_mealsInputObjectSchema as DeviceUncheckedCreateWithoutSubmitted_mealsInputObjectSchema } from './DeviceUncheckedCreateWithoutSubmitted_mealsInput.schema';
import { DeviceCreateOrConnectWithoutSubmitted_mealsInputObjectSchema as DeviceCreateOrConnectWithoutSubmitted_mealsInputObjectSchema } from './DeviceCreateOrConnectWithoutSubmitted_mealsInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutSubmitted_mealsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutSubmitted_mealsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutSubmitted_mealsInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional()
}).strict();
export const DeviceCreateNestedOneWithoutSubmitted_mealsInputObjectSchema: z.ZodType<Prisma.DeviceCreateNestedOneWithoutSubmitted_mealsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateNestedOneWithoutSubmitted_mealsInput>;
export const DeviceCreateNestedOneWithoutSubmitted_mealsInputObjectZodSchema = makeSchema();
