import * as z from 'zod';
// prettier-ignore
export const DummyGenTypesModelSchema = z.object({
    id: z.string(),
    qrarp: z.unknown()
}).strict();

export type DummyGenTypesPureType = z.infer<typeof DummyGenTypesModelSchema>;
