import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  sessionToken: z.string(),
  userId: z.string().max(24),
  expires: z.coerce.date(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const SessionCreateManyInputObjectSchema: z.ZodType<Prisma.SessionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateManyInput>;
export const SessionCreateManyInputObjectZodSchema = makeSchema();
