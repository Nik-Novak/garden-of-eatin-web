import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema';
import { AgreementUpdateWithoutDevice_agreeentsInputObjectSchema as AgreementUpdateWithoutDevice_agreeentsInputObjectSchema } from './AgreementUpdateWithoutDevice_agreeentsInput.schema';
import { AgreementUncheckedUpdateWithoutDevice_agreeentsInputObjectSchema as AgreementUncheckedUpdateWithoutDevice_agreeentsInputObjectSchema } from './AgreementUncheckedUpdateWithoutDevice_agreeentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AgreementUpdateWithoutDevice_agreeentsInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutDevice_agreeentsInputObjectSchema)])
}).strict();
export const AgreementUpdateToOneWithWhereWithoutDevice_agreeentsInputObjectSchema: z.ZodType<Prisma.AgreementUpdateToOneWithWhereWithoutDevice_agreeentsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateToOneWithWhereWithoutDevice_agreeentsInput>;
export const AgreementUpdateToOneWithWhereWithoutDevice_agreeentsInputObjectZodSchema = makeSchema();
