import * as z from 'zod';
export const DummyGenTypesCreateResultSchema = z.object({
  id: z.string(),
  qrarp: z.unknown()
});