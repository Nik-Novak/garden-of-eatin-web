import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContributorSelectObjectSchema as ContributorSelectObjectSchema } from './ContributorSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ContributorSelectObjectSchema).optional()
}).strict();
export const ContributorArgsObjectSchema = makeSchema();
export const ContributorArgsObjectZodSchema = makeSchema();
