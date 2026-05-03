import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DummyGenTypesUpdateManyMutationInputObjectSchema as DummyGenTypesUpdateManyMutationInputObjectSchema } from './objects/DummyGenTypesUpdateManyMutationInput.schema';
import { DummyGenTypesWhereInputObjectSchema as DummyGenTypesWhereInputObjectSchema } from './objects/DummyGenTypesWhereInput.schema';

export const DummyGenTypesUpdateManySchema: z.ZodType<Prisma.DummyGenTypesUpdateManyArgs> = z.object({ data: DummyGenTypesUpdateManyMutationInputObjectSchema, where: DummyGenTypesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DummyGenTypesUpdateManyArgs>;

export const DummyGenTypesUpdateManyZodSchema = z.object({ data: DummyGenTypesUpdateManyMutationInputObjectSchema, where: DummyGenTypesWhereInputObjectSchema.optional() }).strict();