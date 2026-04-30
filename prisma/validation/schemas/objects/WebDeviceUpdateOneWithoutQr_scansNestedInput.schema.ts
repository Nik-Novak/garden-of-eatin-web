import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceCreateWithoutQr_scansInputObjectSchema as WebDeviceCreateWithoutQr_scansInputObjectSchema } from './WebDeviceCreateWithoutQr_scansInput.schema';
import { WebDeviceUncheckedCreateWithoutQr_scansInputObjectSchema as WebDeviceUncheckedCreateWithoutQr_scansInputObjectSchema } from './WebDeviceUncheckedCreateWithoutQr_scansInput.schema';
import { WebDeviceCreateOrConnectWithoutQr_scansInputObjectSchema as WebDeviceCreateOrConnectWithoutQr_scansInputObjectSchema } from './WebDeviceCreateOrConnectWithoutQr_scansInput.schema';
import { WebDeviceUpsertWithoutQr_scansInputObjectSchema as WebDeviceUpsertWithoutQr_scansInputObjectSchema } from './WebDeviceUpsertWithoutQr_scansInput.schema';
import { WebDeviceWhereInputObjectSchema as WebDeviceWhereInputObjectSchema } from './WebDeviceWhereInput.schema';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './WebDeviceWhereUniqueInput.schema';
import { WebDeviceUpdateToOneWithWhereWithoutQr_scansInputObjectSchema as WebDeviceUpdateToOneWithWhereWithoutQr_scansInputObjectSchema } from './WebDeviceUpdateToOneWithWhereWithoutQr_scansInput.schema';
import { WebDeviceUpdateWithoutQr_scansInputObjectSchema as WebDeviceUpdateWithoutQr_scansInputObjectSchema } from './WebDeviceUpdateWithoutQr_scansInput.schema';
import { WebDeviceUncheckedUpdateWithoutQr_scansInputObjectSchema as WebDeviceUncheckedUpdateWithoutQr_scansInputObjectSchema } from './WebDeviceUncheckedUpdateWithoutQr_scansInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WebDeviceCreateWithoutQr_scansInputObjectSchema), z.lazy(() => WebDeviceUncheckedCreateWithoutQr_scansInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WebDeviceCreateOrConnectWithoutQr_scansInputObjectSchema).optional(),
  upsert: z.lazy(() => WebDeviceUpsertWithoutQr_scansInputObjectSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([z.boolean(), z.lazy(() => WebDeviceWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => WebDeviceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WebDeviceUpdateToOneWithWhereWithoutQr_scansInputObjectSchema), z.lazy(() => WebDeviceUpdateWithoutQr_scansInputObjectSchema), z.lazy(() => WebDeviceUncheckedUpdateWithoutQr_scansInputObjectSchema)]).optional()
}).strict();
export const WebDeviceUpdateOneWithoutQr_scansNestedInputObjectSchema: z.ZodType<Prisma.WebDeviceUpdateOneWithoutQr_scansNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUpdateOneWithoutQr_scansNestedInput>;
export const WebDeviceUpdateOneWithoutQr_scansNestedInputObjectZodSchema = makeSchema();
