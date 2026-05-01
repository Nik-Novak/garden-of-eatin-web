import * as z from 'zod';
import { ScannableDocumentTypeSchema } from '../../enums/ScannableDocumentType.schema';
// prettier-ignore
export const ScannableDocumentResultSchema = z.object({
    id: z.string(),
    type: ScannableDocumentTypeSchema,
    name: z.string(),
    place: z.unknown(),
    location: z.unknown(),
    timezone: z.string(),
    print_settings: z.unknown(),
    qr_codes: z.array(z.unknown()),
    file_url: z.string().nullable(),
    scannable_document_meal_hits: z.array(z.unknown()),
    submitter: z.unknown(),
    submitter_id: z.string(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type ScannableDocumentResultType = z.infer<typeof ScannableDocumentResultSchema>;
