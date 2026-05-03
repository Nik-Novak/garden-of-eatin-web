import * as z from 'zod';
export const DummyGenTypesDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  qrarp: z.unknown()
}));