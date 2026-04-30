import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QRCodeUpdateManyMutationInputObjectSchema as QRCodeUpdateManyMutationInputObjectSchema } from './objects/QRCodeUpdateManyMutationInput.schema';
import { QRCodeWhereInputObjectSchema as QRCodeWhereInputObjectSchema } from './objects/QRCodeWhereInput.schema';

export const QRCodeUpdateManySchema: z.ZodType<Prisma.QRCodeUpdateManyArgs> = z.object({ data: QRCodeUpdateManyMutationInputObjectSchema, where: QRCodeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QRCodeUpdateManyArgs>;

export const QRCodeUpdateManyZodSchema = z.object({ data: QRCodeUpdateManyMutationInputObjectSchema, where: QRCodeWhereInputObjectSchema.optional() }).strict();