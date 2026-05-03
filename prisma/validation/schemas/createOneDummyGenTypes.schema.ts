import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DummyGenTypesSelectObjectSchema as DummyGenTypesSelectObjectSchema } from './objects/DummyGenTypesSelect.schema';
import { DummyGenTypesCreateInputObjectSchema as DummyGenTypesCreateInputObjectSchema } from './objects/DummyGenTypesCreateInput.schema';
import { DummyGenTypesUncheckedCreateInputObjectSchema as DummyGenTypesUncheckedCreateInputObjectSchema } from './objects/DummyGenTypesUncheckedCreateInput.schema';

export const DummyGenTypesCreateOneSchema: z.ZodType<Prisma.DummyGenTypesCreateArgs> = z.object({ select: DummyGenTypesSelectObjectSchema.optional(),  data: z.union([DummyGenTypesCreateInputObjectSchema, DummyGenTypesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DummyGenTypesCreateArgs>;

export const DummyGenTypesCreateOneZodSchema = z.object({ select: DummyGenTypesSelectObjectSchema.optional(),  data: z.union([DummyGenTypesCreateInputObjectSchema, DummyGenTypesUncheckedCreateInputObjectSchema]) }).strict();