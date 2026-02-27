import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ImageOrderByCompositeAggregateInputObjectSchema as ImageOrderByCompositeAggregateInputObjectSchema } from './ImageOrderByCompositeAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  images: z.lazy(() => ImageOrderByCompositeAggregateInputObjectSchema).optional(),
  summary: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  keywords: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const PostOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PostOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PostOrderByWithRelationInput>;
export const PostOrderByWithRelationInputObjectZodSchema = makeSchema();
