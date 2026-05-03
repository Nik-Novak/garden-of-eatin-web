import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DummyGenTypesSelectObjectSchema as DummyGenTypesSelectObjectSchema } from './objects/DummyGenTypesSelect.schema';
import { DummyGenTypesWhereUniqueInputObjectSchema as DummyGenTypesWhereUniqueInputObjectSchema } from './objects/DummyGenTypesWhereUniqueInput.schema';

export const DummyGenTypesFindUniqueOrThrowSchema: z.ZodType<Prisma.DummyGenTypesFindUniqueOrThrowArgs> = z.object({ select: DummyGenTypesSelectObjectSchema.optional(),  where: DummyGenTypesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DummyGenTypesFindUniqueOrThrowArgs>;

export const DummyGenTypesFindUniqueOrThrowZodSchema = z.object({ select: DummyGenTypesSelectObjectSchema.optional(),  where: DummyGenTypesWhereUniqueInputObjectSchema }).strict();