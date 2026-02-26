import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageListCreateEnvelopeInputObjectSchema as ImageListCreateEnvelopeInputObjectSchema } from './ImageListCreateEnvelopeInput.schema';
import { ImageCreateInputObjectSchema as ImageCreateInputObjectSchema } from './ImageCreateInput.schema';
import { PostCreatekeywordsInputObjectSchema as PostCreatekeywordsInputObjectSchema } from './PostCreatekeywordsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  title: z.string(),
  category: z.string().optional().nullable(),
  images: z.union([z.lazy(() => ImageListCreateEnvelopeInputObjectSchema), z.lazy(() => ImageCreateInputObjectSchema), z.lazy(() => ImageCreateInputObjectSchema).array()]).optional(),
  summary: z.string().optional().nullable(),
  content: z.string(),
  keywords: z.union([z.lazy(() => PostCreatekeywordsInputObjectSchema), z.string().array()]).optional(),
  created_at: z.coerce.date().optional()
}).strict();
export const PostUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PostUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedCreateInput>;
export const PostUncheckedCreateInputObjectZodSchema = makeSchema();
