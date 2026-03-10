import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementSelectObjectSchema as AgreementSelectObjectSchema } from './AgreementSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AgreementSelectObjectSchema).optional()
}).strict();
export const AgreementArgsObjectSchema = makeSchema();
export const AgreementArgsObjectZodSchema = makeSchema();
