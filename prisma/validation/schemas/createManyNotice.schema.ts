import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NoticeCreateManyInputObjectSchema as NoticeCreateManyInputObjectSchema } from './objects/NoticeCreateManyInput.schema';

export const NoticeCreateManySchema: z.ZodType<Prisma.NoticeCreateManyArgs> = z.object({ data: z.union([ NoticeCreateManyInputObjectSchema, z.array(NoticeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.NoticeCreateManyArgs>;

export const NoticeCreateManyZodSchema = z.object({ data: z.union([ NoticeCreateManyInputObjectSchema, z.array(NoticeCreateManyInputObjectSchema) ]),  }).strict();