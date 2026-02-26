import * as z from 'zod';
export const DeviceCreateManyResultSchema = z.object({
  count: z.number()
});