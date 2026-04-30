import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRScanCreateManyInputObjectSchema as QRScanCreateManyInputObjectSchema } from './objects/QRScanCreateManyInput.schema';

export const QRScanCreateManySchema: z.ZodType<Prisma.QRScanCreateManyArgs> = z.object({ data: z.union([ QRScanCreateManyInputObjectSchema, z.array(QRScanCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.QRScanCreateManyArgs>;

export const QRScanCreateManyZodSchema = z.object({ data: z.union([ QRScanCreateManyInputObjectSchema, z.array(QRScanCreateManyInputObjectSchema) ]),  }).strict();