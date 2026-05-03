import * as z from 'zod';

export const DummyGenTypesScalarFieldEnumSchema = z.enum(['id'])

export type DummyGenTypesScalarFieldEnum = z.infer<typeof DummyGenTypesScalarFieldEnumSchema>;