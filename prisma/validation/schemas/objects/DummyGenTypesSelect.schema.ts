import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  qrarp: z.boolean().optional()
}).strict();
export const DummyGenTypesSelectObjectSchema: z.ZodType<Prisma.DummyGenTypesSelect> = makeSchema() as unknown as z.ZodType<Prisma.DummyGenTypesSelect>;
export const DummyGenTypesSelectObjectZodSchema = makeSchema();
