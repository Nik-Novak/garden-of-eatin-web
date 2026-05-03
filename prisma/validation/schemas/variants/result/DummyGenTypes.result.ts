import * as z from 'zod';
// prettier-ignore
export const DummyGenTypesResultSchema = z.object({
    id: z.string(),
    qrarp: z.unknown()
}).strict();

export type DummyGenTypesResultType = z.infer<typeof DummyGenTypesResultSchema>;
