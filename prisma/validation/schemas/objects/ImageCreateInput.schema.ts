import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  src: z.string(),
  width: z.number().int(),
  height: z.number().int()
}).strict();
export const ImageCreateInputObjectSchema: z.ZodType<Prisma.ImageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateInput>;
export const ImageCreateInputObjectZodSchema = makeSchema();
