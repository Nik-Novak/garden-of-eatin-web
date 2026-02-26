import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { DeviceCreateWithoutSubmitted_mealsInputObjectSchema as DeviceCreateWithoutSubmitted_mealsInputObjectSchema } from './DeviceCreateWithoutSubmitted_mealsInput.schema';
import { DeviceUncheckedCreateWithoutSubmitted_mealsInputObjectSchema as DeviceUncheckedCreateWithoutSubmitted_mealsInputObjectSchema } from './DeviceUncheckedCreateWithoutSubmitted_mealsInput.schema';
import { DeviceCreateOrConnectWithoutSubmitted_mealsInputObjectSchema as DeviceCreateOrConnectWithoutSubmitted_mealsInputObjectSchema } from './DeviceCreateOrConnectWithoutSubmitted_mealsInput.schema';
import { DeviceUpsertWithoutSubmitted_mealsInputObjectSchema as DeviceUpsertWithoutSubmitted_mealsInputObjectSchema } from './DeviceUpsertWithoutSubmitted_mealsInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceUpdateToOneWithWhereWithoutSubmitted_mealsInputObjectSchema as DeviceUpdateToOneWithWhereWithoutSubmitted_mealsInputObjectSchema } from './DeviceUpdateToOneWithWhereWithoutSubmitted_mealsInput.schema';
import { DeviceUpdateWithoutSubmitted_mealsInputObjectSchema as DeviceUpdateWithoutSubmitted_mealsInputObjectSchema } from './DeviceUpdateWithoutSubmitted_mealsInput.schema';
import { DeviceUncheckedUpdateWithoutSubmitted_mealsInputObjectSchema as DeviceUncheckedUpdateWithoutSubmitted_mealsInputObjectSchema } from './DeviceUncheckedUpdateWithoutSubmitted_mealsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutSubmitted_mealsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutSubmitted_mealsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutSubmitted_mealsInputObjectSchema).optional(),
  upsert: z.lazy(() => DeviceUpsertWithoutSubmitted_mealsInputObjectSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([z.boolean(), z.lazy(() => DeviceWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DeviceUpdateToOneWithWhereWithoutSubmitted_mealsInputObjectSchema), z.lazy(() => DeviceUpdateWithoutSubmitted_mealsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutSubmitted_mealsInputObjectSchema)]).optional()
}).strict();
export const DeviceUpdateOneWithoutSubmitted_mealsNestedInputObjectSchema: z.ZodType<Prisma.DeviceUpdateOneWithoutSubmitted_mealsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateOneWithoutSubmitted_mealsNestedInput>;
export const DeviceUpdateOneWithoutSubmitted_mealsNestedInputObjectZodSchema = makeSchema();
