import * as z from 'zod';

export const AccountScalarFieldEnumSchema = z.enum(['id', 'userId', 'type', 'provider', 'providerAccountId', 'refresh_token', 'access_token', 'expires_at', 'expires_in', 'token_type', 'scope', 'id_token', 'session_state', 'api_domain', 'userType', 'locationId', 'company_id', 'approvedLocations', 'planId', 'created_at', 'updated_at'])

export type AccountScalarFieldEnum = z.infer<typeof AccountScalarFieldEnumSchema>;