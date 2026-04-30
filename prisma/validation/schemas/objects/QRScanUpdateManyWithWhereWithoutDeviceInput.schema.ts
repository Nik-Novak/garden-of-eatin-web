import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanScalarWhereInputObjectSchema as QRScanScalarWhereInputObjectSchema } from './QRScanScalarWhereInput.schema';
import { QRScanUpdateManyMutationInputObjectSchema as QRScanUpdateManyMutationInputObjectSchema } from './QRScanUpdateManyMutationInput.schema';
import { QRScanUncheckedUpdateManyWithoutDeviceInputObjectSchema as QRScanUncheckedUpdateManyWithoutDeviceInputObjectSchema } from './QRScanUncheckedUpdateManyWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRScanScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => QRScanUpdateManyMutationInputObjectSchema), z.lazy(() => QRScanUncheckedUpdateManyWithoutDeviceInputObjectSchema)])
}).strict();
export const QRScanUpdateManyWithWhereWithoutDeviceInputObjectSchema: z.ZodType<Prisma.QRScanUpdateManyWithWhereWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUpdateManyWithWhereWithoutDeviceInput>;
export const QRScanUpdateManyWithWhereWithoutDeviceInputObjectZodSchema = makeSchema();
