import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ImageListUpdateEnvelopeInputObjectSchema as ImageListUpdateEnvelopeInputObjectSchema } from './ImageListUpdateEnvelopeInput.schema';
import { ImageCreateInputObjectSchema as ImageCreateInputObjectSchema } from './ImageCreateInput.schema';
import { PostUpdatekeywordsInputObjectSchema as PostUpdatekeywordsInputObjectSchema } from './PostUpdatekeywordsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  category: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  images: z.union([z.lazy(() => ImageListUpdateEnvelopeInputObjectSchema), z.lazy(() => ImageCreateInputObjectSchema), z.lazy(() => ImageCreateInputObjectSchema).array()]).optional(),
  summary: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  keywords: z.union([z.lazy(() => PostUpdatekeywordsInputObjectSchema), z.string().array()]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const PostUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.PostUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedUpdateManyInput>;
export const PostUncheckedUpdateManyInputObjectZodSchema = makeSchema();
