import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const PostCreatekeywordsInputObjectSchema: z.ZodType<Prisma.PostCreatekeywordsInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreatekeywordsInput>;
export const PostCreatekeywordsInputObjectZodSchema = makeSchema();
