import * as z from 'zod';
export const DummyGenTypesFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  qrarp: z.unknown()
}));