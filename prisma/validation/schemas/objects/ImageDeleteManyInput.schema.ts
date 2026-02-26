import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './ImageWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereInputObjectSchema)
}).strict();
export const ImageDeleteManyInputObjectSchema: z.ZodType<Prisma.ImageDeleteManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageDeleteManyInput>;
export const ImageDeleteManyInputObjectZodSchema = makeSchema();
