import * as z from 'zod';

export const TimeAnchorSchema = z.enum(['Midnight', 'Sunrise', 'Sunset', 'Dawn', 'Dusk'])

export type TimeAnchor = z.infer<typeof TimeAnchorSchema>;