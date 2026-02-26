import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
  created_at: z.coerce.date().optional()
}).strict();
export const VerificationTokenCreateInputObjectSchema: z.ZodType<Prisma.VerificationTokenCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VerificationTokenCreateInput>;
export const VerificationTokenCreateInputObjectZodSchema = makeSchema();
