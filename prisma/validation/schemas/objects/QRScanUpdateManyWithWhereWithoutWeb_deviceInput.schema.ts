import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRScanScalarWhereInputObjectSchema as QRScanScalarWhereInputObjectSchema } from './QRScanScalarWhereInput.schema';
import { QRScanUpdateManyMutationInputObjectSchema as QRScanUpdateManyMutationInputObjectSchema } from './QRScanUpdateManyMutationInput.schema';
import { QRScanUncheckedUpdateManyWithoutWeb_deviceInputObjectSchema as QRScanUncheckedUpdateManyWithoutWeb_deviceInputObjectSchema } from './QRScanUncheckedUpdateManyWithoutWeb_deviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRScanScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => QRScanUpdateManyMutationInputObjectSchema), z.lazy(() => QRScanUncheckedUpdateManyWithoutWeb_deviceInputObjectSchema)])
}).strict();
export const QRScanUpdateManyWithWhereWithoutWeb_deviceInputObjectSchema: z.ZodType<Prisma.QRScanUpdateManyWithWhereWithoutWeb_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanUpdateManyWithWhereWithoutWeb_deviceInput>;
export const QRScanUpdateManyWithWhereWithoutWeb_deviceInputObjectZodSchema = makeSchema();
