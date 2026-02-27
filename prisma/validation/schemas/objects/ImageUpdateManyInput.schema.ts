import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './ImageWhereInput.schema';
import { ImageUpdateInputObjectSchema as ImageUpdateInputObjectSchema } from './ImageUpdateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereInputObjectSchema),
  data: z.lazy(() => ImageUpdateInputObjectSchema)
}).strict();
export const ImageUpdateManyInputObjectSchema: z.ZodType<Prisma.ImageUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateManyInput>;
export const ImageUpdateManyInputObjectZodSchema = makeSchema();
