import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DummyGenTypesSelectObjectSchema as DummyGenTypesSelectObjectSchema } from './objects/DummyGenTypesSelect.schema';
import { DummyGenTypesWhereUniqueInputObjectSchema as DummyGenTypesWhereUniqueInputObjectSchema } from './objects/DummyGenTypesWhereUniqueInput.schema';

export const DummyGenTypesFindUniqueSchema: z.ZodType<Prisma.DummyGenTypesFindUniqueArgs> = z.object({ select: DummyGenTypesSelectObjectSchema.optional(),  where: DummyGenTypesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DummyGenTypesFindUniqueArgs>;

export const DummyGenTypesFindUniqueZodSchema = z.object({ select: DummyGenTypesSelectObjectSchema.optional(),  where: DummyGenTypesWhereUniqueInputObjectSchema }).strict();