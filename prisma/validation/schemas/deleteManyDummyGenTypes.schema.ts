import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DummyGenTypesWhereInputObjectSchema as DummyGenTypesWhereInputObjectSchema } from './objects/DummyGenTypesWhereInput.schema';

export const DummyGenTypesDeleteManySchema: z.ZodType<Prisma.DummyGenTypesDeleteManyArgs> = z.object({ where: DummyGenTypesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DummyGenTypesDeleteManyArgs>;

export const DummyGenTypesDeleteManyZodSchema = z.object({ where: DummyGenTypesWhereInputObjectSchema.optional() }).strict();