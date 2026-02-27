import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ImageCreateInputObjectSchema as ImageCreateInputObjectSchema } from './ImageCreateInput.schema';
import { ImageUpdateManyInputObjectSchema as ImageUpdateManyInputObjectSchema } from './ImageUpdateManyInput.schema';
import { ImageDeleteManyInputObjectSchema as ImageDeleteManyInputObjectSchema } from './ImageDeleteManyInput.schema'

const makeSchema = () => z.object({
  set: z.union([z.lazy(() => ImageCreateInputObjectSchema), z.lazy(() => ImageCreateInputObjectSchema).array()]).optional(),
  push: z.union([z.lazy(() => ImageCreateInputObjectSchema), z.lazy(() => ImageCreateInputObjectSchema).array()]).optional(),
  updateMany: z.lazy(() => ImageUpdateManyInputObjectSchema).optional(),
  deleteMany: z.lazy(() => ImageDeleteManyInputObjectSchema).optional()
}).strict();
export const ImageListUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.ImageListUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageListUpdateEnvelopeInput>;
export const ImageListUpdateEnvelopeInputObjectZodSchema = makeSchema();
