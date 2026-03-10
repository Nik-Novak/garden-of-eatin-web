import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AgreementSelectObjectSchema as AgreementSelectObjectSchema } from './objects/AgreementSelect.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './objects/AgreementWhereUniqueInput.schema';

export const AgreementFindUniqueSchema: z.ZodType<Prisma.AgreementFindUniqueArgs> = z.object({ select: AgreementSelectObjectSchema.optional(),  where: AgreementWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgreementFindUniqueArgs>;

export const AgreementFindUniqueZodSchema = z.object({ select: AgreementSelectObjectSchema.optional(),  where: AgreementWhereUniqueInputObjectSchema }).strict();