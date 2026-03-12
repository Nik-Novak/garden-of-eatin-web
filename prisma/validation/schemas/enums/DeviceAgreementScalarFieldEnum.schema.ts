import * as z from 'zod';

export const DeviceAgreementScalarFieldEnumSchema = z.enum(['id', 'device_id', 'agreement_id', 'opened', 'accepted', 'created_at', 'updated_at'])

export type DeviceAgreementScalarFieldEnum = z.infer<typeof DeviceAgreementScalarFieldEnumSchema>;