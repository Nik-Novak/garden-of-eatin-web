import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ContactRequestSelectObjectSchema as ContactRequestSelectObjectSchema } from './ContactRequestSelect.schema';
import { ContactRequestIncludeObjectSchema as ContactRequestIncludeObjectSchema } from './ContactRequestInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ContactRequestSelectObjectSchema).optional(),
  include: z.lazy(() => ContactRequestIncludeObjectSchema).optional()
}).strict();
export const ContactRequestArgsObjectSchema = makeSchema();
export const ContactRequestArgsObjectZodSchema = makeSchema();
