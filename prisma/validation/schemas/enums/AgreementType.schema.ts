import * as z from 'zod';

export const AgreementTypeSchema = z.enum(['TermsOfService', 'PrivacyPolicy', 'ReleaseOfLiability'])

export type AgreementType = z.infer<typeof AgreementTypeSchema>;