import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceResource_idStartEndCompoundUniqueInputObjectSchema as ResourceOccurrenceResource_idStartEndCompoundUniqueInputObjectSchema } from './ResourceOccurrenceResource_idStartEndCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  resource_id_start_end: z.lazy(() => ResourceOccurrenceResource_idStartEndCompoundUniqueInputObjectSchema).optional()
}).strict();
export const ResourceOccurrenceWhereUniqueInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceWhereUniqueInput>;
export const ResourceOccurrenceWhereUniqueInputObjectZodSchema = makeSchema();
