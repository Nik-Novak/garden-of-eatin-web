import * as z from 'zod';
import { AgreementTypeSchema } from '../../enums/AgreementType.schema';
// prettier-ignore
export const AgreementResultSchema = z.object({
    id: z.string(),
    agreement_type: AgreementTypeSchema,
    effective_date: z.date(),
    content_md: z.string(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type AgreementResultType = z.infer<typeof AgreementResultSchema>;
