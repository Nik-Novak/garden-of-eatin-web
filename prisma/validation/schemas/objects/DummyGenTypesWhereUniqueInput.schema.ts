import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const DummyGenTypesWhereUniqueInputObjectSchema: z.ZodType<Prisma.DummyGenTypesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DummyGenTypesWhereUniqueInput>;
export const DummyGenTypesWhereUniqueInputObjectZodSchema = makeSchema();
