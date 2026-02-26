import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  set: z.number().array()
}).strict();
export const PointCreatecoordinatesInputObjectSchema: z.ZodType<Prisma.PointCreatecoordinatesInput> = makeSchema() as unknown as z.ZodType<Prisma.PointCreatecoordinatesInput>;
export const PointCreatecoordinatesInputObjectZodSchema = makeSchema();
