import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementCreateWithoutDevice_agreeentsInputObjectSchema as AgreementCreateWithoutDevice_agreeentsInputObjectSchema } from './AgreementCreateWithoutDevice_agreeentsInput.schema';
import { AgreementUncheckedCreateWithoutDevice_agreeentsInputObjectSchema as AgreementUncheckedCreateWithoutDevice_agreeentsInputObjectSchema } from './AgreementUncheckedCreateWithoutDevice_agreeentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgreementWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgreementCreateWithoutDevice_agreeentsInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutDevice_agreeentsInputObjectSchema)])
}).strict();
export const AgreementCreateOrConnectWithoutDevice_agreeentsInputObjectSchema: z.ZodType<Prisma.AgreementCreateOrConnectWithoutDevice_agreeentsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateOrConnectWithoutDevice_agreeentsInput>;
export const AgreementCreateOrConnectWithoutDevice_agreeentsInputObjectZodSchema = makeSchema();
