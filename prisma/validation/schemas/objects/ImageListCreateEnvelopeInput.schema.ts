import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ImageCreateInputObjectSchema as ImageCreateInputObjectSchema } from './ImageCreateInput.schema'

const makeSchema = () => z.object({
  set: z.union([z.lazy(() => ImageCreateInputObjectSchema), z.lazy(() => ImageCreateInputObjectSchema).array()]).optional()
}).strict();
export const ImageListCreateEnvelopeInputObjectSchema: z.ZodType<Prisma.ImageListCreateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageListCreateEnvelopeInput>;
export const ImageListCreateEnvelopeInputObjectZodSchema = makeSchema();
