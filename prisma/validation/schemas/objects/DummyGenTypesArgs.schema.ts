import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DummyGenTypesSelectObjectSchema as DummyGenTypesSelectObjectSchema } from './DummyGenTypesSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DummyGenTypesSelectObjectSchema).optional()
}).strict();
export const DummyGenTypesArgsObjectSchema = makeSchema();
export const DummyGenTypesArgsObjectZodSchema = makeSchema();
