import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './WebDeviceWhereUniqueInput.schema';
import { WebDeviceCreateWithoutQr_scansInputObjectSchema as WebDeviceCreateWithoutQr_scansInputObjectSchema } from './WebDeviceCreateWithoutQr_scansInput.schema';
import { WebDeviceUncheckedCreateWithoutQr_scansInputObjectSchema as WebDeviceUncheckedCreateWithoutQr_scansInputObjectSchema } from './WebDeviceUncheckedCreateWithoutQr_scansInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WebDeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WebDeviceCreateWithoutQr_scansInputObjectSchema), z.lazy(() => WebDeviceUncheckedCreateWithoutQr_scansInputObjectSchema)])
}).strict();
export const WebDeviceCreateOrConnectWithoutQr_scansInputObjectSchema: z.ZodType<Prisma.WebDeviceCreateOrConnectWithoutQr_scansInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceCreateOrConnectWithoutQr_scansInput>;
export const WebDeviceCreateOrConnectWithoutQr_scansInputObjectZodSchema = makeSchema();
