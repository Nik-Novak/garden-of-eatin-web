import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  type: z.literal(true).optional(),
  provider: z.literal(true).optional(),
  providerAccountId: z.literal(true).optional(),
  refresh_token: z.literal(true).optional(),
  access_token: z.literal(true).optional(),
  expires_at: z.literal(true).optional(),
  expires_in: z.literal(true).optional(),
  token_type: z.literal(true).optional(),
  scope: z.literal(true).optional(),
  id_token: z.literal(true).optional(),
  session_state: z.literal(true).optional(),
  api_domain: z.literal(true).optional(),
  userType: z.literal(true).optional(),
  locationId: z.literal(true).optional(),
  company_id: z.literal(true).optional(),
  planId: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const AccountMinAggregateInputObjectSchema: z.ZodType<Prisma.AccountMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountMinAggregateInputType>;
export const AccountMinAggregateInputObjectZodSchema = makeSchema();
