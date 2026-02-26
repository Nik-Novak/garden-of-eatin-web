import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  email: z.literal(true).optional(),
  device_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const ContactRequestMinAggregateInputObjectSchema: z.ZodType<Prisma.ContactRequestMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestMinAggregateInputType>;
export const ContactRequestMinAggregateInputObjectZodSchema = makeSchema();
