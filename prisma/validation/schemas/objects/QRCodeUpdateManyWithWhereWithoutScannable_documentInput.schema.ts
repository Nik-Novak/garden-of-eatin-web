import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRCodeScalarWhereInputObjectSchema as QRCodeScalarWhereInputObjectSchema } from './QRCodeScalarWhereInput.schema';
import { QRCodeUpdateManyMutationInputObjectSchema as QRCodeUpdateManyMutationInputObjectSchema } from './QRCodeUpdateManyMutationInput.schema';
import { QRCodeUncheckedUpdateManyWithoutScannable_documentInputObjectSchema as QRCodeUncheckedUpdateManyWithoutScannable_documentInputObjectSchema } from './QRCodeUncheckedUpdateManyWithoutScannable_documentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QRCodeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => QRCodeUpdateManyMutationInputObjectSchema), z.lazy(() => QRCodeUncheckedUpdateManyWithoutScannable_documentInputObjectSchema)])
}).strict();
export const QRCodeUpdateManyWithWhereWithoutScannable_documentInputObjectSchema: z.ZodType<Prisma.QRCodeUpdateManyWithWhereWithoutScannable_documentInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeUpdateManyWithWhereWithoutScannable_documentInput>;
export const QRCodeUpdateManyWithWhereWithoutScannable_documentInputObjectZodSchema = makeSchema();
