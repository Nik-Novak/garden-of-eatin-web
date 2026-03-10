import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const AgreementWhereUniqueInputObjectSchema: z.ZodType<Prisma.AgreementWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementWhereUniqueInput>;
export const AgreementWhereUniqueInputObjectZodSchema = makeSchema();
