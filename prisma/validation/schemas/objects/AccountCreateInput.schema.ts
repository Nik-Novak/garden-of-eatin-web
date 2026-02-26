import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountCreateapprovedLocationsInputObjectSchema as AccountCreateapprovedLocationsInputObjectSchema } from './AccountCreateapprovedLocationsInput.schema';
import { UserCreateNestedOneWithoutAccountsInputObjectSchema as UserCreateNestedOneWithoutAccountsInputObjectSchema } from './UserCreateNestedOneWithoutAccountsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  expires_in: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  api_domain: z.string().optional().nullable(),
  userType: z.string().optional().nullable(),
  locationId: z.string().optional().nullable(),
  company_id: z.string().optional().nullable(),
  approvedLocations: z.union([z.lazy(() => AccountCreateapprovedLocationsInputObjectSchema), z.string().array()]).optional(),
  planId: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputObjectSchema)
}).strict();
export const AccountCreateInputObjectSchema: z.ZodType<Prisma.AccountCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateInput>;
export const AccountCreateInputObjectZodSchema = makeSchema();
