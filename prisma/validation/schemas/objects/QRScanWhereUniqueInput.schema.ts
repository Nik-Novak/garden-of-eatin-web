import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const QRScanWhereUniqueInputObjectSchema: z.ZodType<Prisma.QRScanWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.QRScanWhereUniqueInput>;
export const QRScanWhereUniqueInputObjectZodSchema = makeSchema();
