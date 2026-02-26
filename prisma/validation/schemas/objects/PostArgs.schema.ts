import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { PostSelectObjectSchema as PostSelectObjectSchema } from './PostSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PostSelectObjectSchema).optional()
}).strict();
export const PostArgsObjectSchema = makeSchema();
export const PostArgsObjectZodSchema = makeSchema();
