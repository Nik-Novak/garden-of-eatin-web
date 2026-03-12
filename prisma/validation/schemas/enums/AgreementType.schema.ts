import * as z from 'zod';

export const AgreementTypeSchema = z.enum(['terms_of_service', 'privacy_policy', 'release_of_liability'])

export type AgreementType = z.infer<typeof AgreementTypeSchema>;