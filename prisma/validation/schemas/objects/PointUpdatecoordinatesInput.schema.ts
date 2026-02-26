import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  set: z.number().array().optional(),
  push: z.union([z.number(), z.number().array()]).optional()
}).strict();
export const PointUpdatecoordinatesInputObjectSchema: z.ZodType<Prisma.PointUpdatecoordinatesInput> = makeSchema() as unknown as z.ZodType<Prisma.PointUpdatecoordinatesInput>;
export const PointUpdatecoordinatesInputObjectZodSchema = makeSchema();
