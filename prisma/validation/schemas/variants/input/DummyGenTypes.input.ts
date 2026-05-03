import * as z from 'zod';
// prettier-ignore
export const DummyGenTypesInputSchema = z.object({
    id: z.string(),
    qrarp: z.unknown()
}).strict();

export type DummyGenTypesInputType = z.infer<typeof DummyGenTypesInputSchema>;
