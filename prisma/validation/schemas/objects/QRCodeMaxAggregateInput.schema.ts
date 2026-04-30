import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  scannable_document_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const QRCodeMaxAggregateInputObjectSchema: z.ZodType<Prisma.QRCodeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeMaxAggregateInputType>;
export const QRCodeMaxAggregateInputObjectZodSchema = makeSchema();
