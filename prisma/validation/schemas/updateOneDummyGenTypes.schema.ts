import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DummyGenTypesSelectObjectSchema as DummyGenTypesSelectObjectSchema } from './objects/DummyGenTypesSelect.schema';
import { DummyGenTypesUpdateInputObjectSchema as DummyGenTypesUpdateInputObjectSchema } from './objects/DummyGenTypesUpdateInput.schema';
import { DummyGenTypesUncheckedUpdateInputObjectSchema as DummyGenTypesUncheckedUpdateInputObjectSchema } from './objects/DummyGenTypesUncheckedUpdateInput.schema';
import { DummyGenTypesWhereUniqueInputObjectSchema as DummyGenTypesWhereUniqueInputObjectSchema } from './objects/DummyGenTypesWhereUniqueInput.schema';

export const DummyGenTypesUpdateOneSchema: z.ZodType<Prisma.DummyGenTypesUpdateArgs> = z.object({ select: DummyGenTypesSelectObjectSchema.optional(),  data: z.union([DummyGenTypesUpdateInputObjectSchema, DummyGenTypesUncheckedUpdateInputObjectSchema]), where: DummyGenTypesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DummyGenTypesUpdateArgs>;

export const DummyGenTypesUpdateOneZodSchema = z.object({ select: DummyGenTypesSelectObjectSchema.optional(),  data: z.union([DummyGenTypesUpdateInputObjectSchema, DummyGenTypesUncheckedUpdateInputObjectSchema]), where: DummyGenTypesWhereUniqueInputObjectSchema }).strict();