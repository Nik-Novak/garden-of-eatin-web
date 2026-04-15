import * as z from 'zod';
import { InteractionTypeSchema } from '../../enums/InteractionType.schema';
// prettier-ignore
export const ResourceInteractionResultSchema = z.object({
    id: z.string(),
    interaction_type: InteractionTypeSchema,
    resource: z.unknown(),
    resource_id: z.string(),
    device: z.unknown(),
    device_id: z.string(),
    user_location: z.unknown(),
    created_at: z.date()
}).strict();

export type ResourceInteractionResultType = z.infer<typeof ResourceInteractionResultSchema>;
