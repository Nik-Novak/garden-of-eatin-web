import * as z from 'zod';
export const DummyGenTypesUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  qrarp: z.unknown()
}));