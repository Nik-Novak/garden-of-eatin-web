import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceCreateWithoutSubmitted_mealsInputObjectSchema as DeviceCreateWithoutSubmitted_mealsInputObjectSchema } from './DeviceCreateWithoutSubmitted_mealsInput.schema';
import { DeviceUncheckedCreateWithoutSubmitted_mealsInputObjectSchema as DeviceUncheckedCreateWithoutSubmitted_mealsInputObjectSchema } from './DeviceUncheckedCreateWithoutSubmitted_mealsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeviceCreateWithoutSubmitted_mealsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutSubmitted_mealsInputObjectSchema)])
}).strict();
export const DeviceCreateOrConnectWithoutSubmitted_mealsInputObjectSchema: z.ZodType<Prisma.DeviceCreateOrConnectWithoutSubmitted_mealsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateOrConnectWithoutSubmitted_mealsInput>;
export const DeviceCreateOrConnectWithoutSubmitted_mealsInputObjectZodSchema = makeSchema();
