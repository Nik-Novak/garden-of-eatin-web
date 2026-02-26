import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ContactRequestWhereInputObjectSchema as ContactRequestWhereInputObjectSchema } from './ContactRequestWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ContactRequestWhereInputObjectSchema).optional(),
  some: z.lazy(() => ContactRequestWhereInputObjectSchema).optional(),
  none: z.lazy(() => ContactRequestWhereInputObjectSchema).optional()
}).strict();
export const ContactRequestListRelationFilterObjectSchema: z.ZodType<Prisma.ContactRequestListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestListRelationFilter>;
export const ContactRequestListRelationFilterObjectZodSchema = makeSchema();
