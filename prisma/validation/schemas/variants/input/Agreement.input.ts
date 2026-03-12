import * as z from 'zod';
import { AgreementTypeSchema } from '../../enums/AgreementType.schema';
// prettier-ignore
export const AgreementInputSchema = z.object({
    id: z.string(),
    agreement_type: AgreementTypeSchema,
    effective_date: z.date(),
    content_md: z.string(),
    device_agreeents: z.array(z.unknown()),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type AgreementInputType = z.infer<typeof AgreementInputSchema>;
