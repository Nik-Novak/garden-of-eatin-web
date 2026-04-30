import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  qr_code_id: z.literal(true).optional(),
  web_device_id: z.literal(true).optional(),
  device_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const QRScanMaxAggregateInputObjectSchema: z.ZodType<Prisma.QRScanMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.QRScanMaxAggregateInputType>;
export const QRScanMaxAggregateInputObjectZodSchema = makeSchema();
