import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementUpdateWithoutDevice_agreeentsInputObjectSchema as AgreementUpdateWithoutDevice_agreeentsInputObjectSchema } from './AgreementUpdateWithoutDevice_agreeentsInput.schema';
import { AgreementUncheckedUpdateWithoutDevice_agreeentsInputObjectSchema as AgreementUncheckedUpdateWithoutDevice_agreeentsInputObjectSchema } from './AgreementUncheckedUpdateWithoutDevice_agreeentsInput.schema';
import { AgreementCreateWithoutDevice_agreeentsInputObjectSchema as AgreementCreateWithoutDevice_agreeentsInputObjectSchema } from './AgreementCreateWithoutDevice_agreeentsInput.schema';
import { AgreementUncheckedCreateWithoutDevice_agreeentsInputObjectSchema as AgreementUncheckedCreateWithoutDevice_agreeentsInputObjectSchema } from './AgreementUncheckedCreateWithoutDevice_agreeentsInput.schema';
import { AgreementWhereInputObjectSchema as AgreementWhereInputObjectSchema } from './AgreementWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AgreementUpdateWithoutDevice_agreeentsInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutDevice_agreeentsInputObjectSchema)]),
  create: z.union([z.lazy(() => AgreementCreateWithoutDevice_agreeentsInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutDevice_agreeentsInputObjectSchema)]),
  where: z.lazy(() => AgreementWhereInputObjectSchema).optional()
}).strict();
export const AgreementUpsertWithoutDevice_agreeentsInputObjectSchema: z.ZodType<Prisma.AgreementUpsertWithoutDevice_agreeentsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpsertWithoutDevice_agreeentsInput>;
export const AgreementUpsertWithoutDevice_agreeentsInputObjectZodSchema = makeSchema();
