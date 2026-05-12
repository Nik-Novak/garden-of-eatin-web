import * as z from 'zod';
export const ResourceCreateManyResultSchema = z.object({
  count: z.number()
});