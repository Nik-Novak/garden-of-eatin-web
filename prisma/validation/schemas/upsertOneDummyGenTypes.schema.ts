import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DummyGenTypesSelectObjectSchema as DummyGenTypesSelectObjectSchema } from './objects/DummyGenTypesSelect.schema';
import { DummyGenTypesWhereUniqueInputObjectSchema as DummyGenTypesWhereUniqueInputObjectSchema } from './objects/DummyGenTypesWhereUniqueInput.schema';
import { DummyGenTypesCreateInputObjectSchema as DummyGenTypesCreateInputObjectSchema } from './objects/DummyGenTypesCreateInput.schema';
import { DummyGenTypesUncheckedCreateInputObjectSchema as DummyGenTypesUncheckedCreateInputObjectSchema } from './objects/DummyGenTypesUncheckedCreateInput.schema';
import { DummyGenTypesUpdateInputObjectSchema as DummyGenTypesUpdateInputObjectSchema } from './objects/DummyGenTypesUpdateInput.schema';
import { DummyGenTypesUncheckedUpdateInputObjectSchema as DummyGenTypesUncheckedUpdateInputObjectSchema } from './objects/DummyGenTypesUncheckedUpdateInput.schema';

export const DummyGenTypesUpsertOneSchema: z.ZodType<Prisma.DummyGenTypesUpsertArgs> = z.object({ select: DummyGenTypesSelectObjectSchema.optional(),  where: DummyGenTypesWhereUniqueInputObjectSchema, create: z.union([ DummyGenTypesCreateInputObjectSchema, DummyGenTypesUncheckedCreateInputObjectSchema ]), update: z.union([ DummyGenTypesUpdateInputObjectSchema, DummyGenTypesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DummyGenTypesUpsertArgs>;

export const DummyGenTypesUpsertOneZodSchema = z.object({ select: DummyGenTypesSelectObjectSchema.optional(),  where: DummyGenTypesWhereUniqueInputObjectSchema, create: z.union([ DummyGenTypesCreateInputObjectSchema, DummyGenTypesUncheckedCreateInputObjectSchema ]), update: z.union([ DummyGenTypesUpdateInputObjectSchema, DummyGenTypesUncheckedUpdateInputObjectSchema ]) }).strict();