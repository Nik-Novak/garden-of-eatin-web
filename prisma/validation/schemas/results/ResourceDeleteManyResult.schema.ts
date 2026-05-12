import * as z from 'zod';
export const ResourceDeleteManyResultSchema = z.object({
  count: z.number()
});