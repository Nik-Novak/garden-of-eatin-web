import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementSelectObjectSchema as AgreementSelectObjectSchema } from './objects/AgreementSelect.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './objects/AgreementWhereUniqueInput.schema';

export const AgreementFindUniqueOrThrowSchema: z.ZodType<Prisma.AgreementFindUniqueOrThrowArgs> = z.object({ select: AgreementSelectObjectSchema.optional(),  where: AgreementWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgreementFindUniqueOrThrowArgs>;

export const AgreementFindUniqueOrThrowZodSchema = z.object({ select: AgreementSelectObjectSchema.optional(),  where: AgreementWhereUniqueInputObjectSchema }).strict();