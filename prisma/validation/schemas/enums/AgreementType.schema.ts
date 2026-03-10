import * as z from 'zod';

export const AgreementTypeSchema = z.enum(['TermsofService', 'PrivacyPolicy', 'ReleaseOfLiability'])

export type AgreementType = z.infer<typeof AgreementTypeSchema>;