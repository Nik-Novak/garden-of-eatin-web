import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DummyGenTypesSelectObjectSchema as DummyGenTypesSelectObjectSchema } from './objects/DummyGenTypesSelect.schema';
import { DummyGenTypesWhereUniqueInputObjectSchema as DummyGenTypesWhereUniqueInputObjectSchema } from './objects/DummyGenTypesWhereUniqueInput.schema';

export const DummyGenTypesDeleteOneSchema: z.ZodType<Prisma.DummyGenTypesDeleteArgs> = z.object({ select: DummyGenTypesSelectObjectSchema.optional(),  where: DummyGenTypesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DummyGenTypesDeleteArgs>;

export const DummyGenTypesDeleteOneZodSchema = z.object({ select: DummyGenTypesSelectObjectSchema.optional(),  where: DummyGenTypesWhereUniqueInputObjectSchema }).strict();