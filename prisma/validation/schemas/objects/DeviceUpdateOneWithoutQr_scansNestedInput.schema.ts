import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceCreateWithoutQr_scansInputObjectSchema as DeviceCreateWithoutQr_scansInputObjectSchema } from './DeviceCreateWithoutQr_scansInput.schema';
import { DeviceUncheckedCreateWithoutQr_scansInputObjectSchema as DeviceUncheckedCreateWithoutQr_scansInputObjectSchema } from './DeviceUncheckedCreateWithoutQr_scansInput.schema';
import { DeviceCreateOrConnectWithoutQr_scansInputObjectSchema as DeviceCreateOrConnectWithoutQr_scansInputObjectSchema } from './DeviceCreateOrConnectWithoutQr_scansInput.schema';
import { DeviceUpsertWithoutQr_scansInputObjectSchema as DeviceUpsertWithoutQr_scansInputObjectSchema } from './DeviceUpsertWithoutQr_scansInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceUpdateToOneWithWhereWithoutQr_scansInputObjectSchema as DeviceUpdateToOneWithWhereWithoutQr_scansInputObjectSchema } from './DeviceUpdateToOneWithWhereWithoutQr_scansInput.schema';
import { DeviceUpdateWithoutQr_scansInputObjectSchema as DeviceUpdateWithoutQr_scansInputObjectSchema } from './DeviceUpdateWithoutQr_scansInput.schema';
import { DeviceUncheckedUpdateWithoutQr_scansInputObjectSchema as DeviceUncheckedUpdateWithoutQr_scansInputObjectSchema } from './DeviceUncheckedUpdateWithoutQr_scansInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutQr_scansInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutQr_scansInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutQr_scansInputObjectSchema).optional(),
  upsert: z.lazy(() => DeviceUpsertWithoutQr_scansInputObjectSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([z.boolean(), z.lazy(() => DeviceWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DeviceUpdateToOneWithWhereWithoutQr_scansInputObjectSchema), z.lazy(() => DeviceUpdateWithoutQr_scansInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutQr_scansInputObjectSchema)]).optional()
}).strict();
export const DeviceUpdateOneWithoutQr_scansNestedInputObjectSchema: z.ZodType<Prisma.DeviceUpdateOneWithoutQr_scansNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateOneWithoutQr_scansNestedInput>;
export const DeviceUpdateOneWithoutQr_scansNestedInputObjectZodSchema = makeSchema();
