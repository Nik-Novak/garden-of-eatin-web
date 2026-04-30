import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  qr_code_id: z.literal(true).optional(),
  web_device_id: z.literal(true).optional(),
  device_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const QRScanCountAggregateInputObjectSchema: z.ZodType<Prisma.QRScanCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.QRScanCountAggregateInputType>;
export const QRScanCountAggregateInputObjectZodSchema = makeSchema();
