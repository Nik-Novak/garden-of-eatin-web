import * as z from 'zod';
export const DummyGenTypesUpsertResultSchema = z.object({
  id: z.string(),
  qrarp: z.unknown()
});