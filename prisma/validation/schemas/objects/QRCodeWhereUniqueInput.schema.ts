import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const QRCodeWhereUniqueInputObjectSchema: z.ZodType<Prisma.QRCodeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.QRCodeWhereUniqueInput>;
export const QRCodeWhereUniqueInputObjectZodSchema = makeSchema();
