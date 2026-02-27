import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const VerificationTokenCreateManyInputObjectSchema: z.ZodType<Prisma.VerificationTokenCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.VerificationTokenCreateManyInput>;
export const VerificationTokenCreateManyInputObjectZodSchema = makeSchema();
