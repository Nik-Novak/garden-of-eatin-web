import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DummyGenTypesCreateManyInputObjectSchema as DummyGenTypesCreateManyInputObjectSchema } from './objects/DummyGenTypesCreateManyInput.schema';

export const DummyGenTypesCreateManySchema: z.ZodType<Prisma.DummyGenTypesCreateManyArgs> = z.object({ data: z.union([ DummyGenTypesCreateManyInputObjectSchema, z.array(DummyGenTypesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.DummyGenTypesCreateManyArgs>;

export const DummyGenTypesCreateManyZodSchema = z.object({ data: z.union([ DummyGenTypesCreateManyInputObjectSchema, z.array(DummyGenTypesCreateManyInputObjectSchema) ]),  }).strict();