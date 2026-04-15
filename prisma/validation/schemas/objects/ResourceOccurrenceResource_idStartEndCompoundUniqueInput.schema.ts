import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  resource_id: z.string(),
  start: z.date(),
  end: z.date()
}).strict();
export const ResourceOccurrenceResource_idStartEndCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceResource_idStartEndCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceResource_idStartEndCompoundUniqueInput>;
export const ResourceOccurrenceResource_idStartEndCompoundUniqueInputObjectZodSchema = makeSchema();
