import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const imagewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ImageWhereInputObjectSchema), z.lazy(() => ImageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ImageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ImageWhereInputObjectSchema), z.lazy(() => ImageWhereInputObjectSchema).array()]).optional(),
  src: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  width: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  height: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ImageWhereInputObjectSchema: z.ZodType<Prisma.ImageWhereInput> = imagewhereinputSchema as unknown as z.ZodType<Prisma.ImageWhereInput>;
export const ImageWhereInputObjectZodSchema = imagewhereinputSchema;
