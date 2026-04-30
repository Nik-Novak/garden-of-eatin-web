import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRCodeCreateManyInputObjectSchema as QRCodeCreateManyInputObjectSchema } from './objects/QRCodeCreateManyInput.schema';

export const QRCodeCreateManySchema: z.ZodType<Prisma.QRCodeCreateManyArgs> = z.object({ data: z.union([ QRCodeCreateManyInputObjectSchema, z.array(QRCodeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.QRCodeCreateManyArgs>;

export const QRCodeCreateManyZodSchema = z.object({ data: z.union([ QRCodeCreateManyInputObjectSchema, z.array(QRCodeCreateManyInputObjectSchema) ]),  }).strict();