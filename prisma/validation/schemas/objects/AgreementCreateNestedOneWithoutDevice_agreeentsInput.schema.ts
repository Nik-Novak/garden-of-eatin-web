import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateWithoutDevice_agreeentsInputObjectSchema as AgreementCreateWithoutDevice_agreeentsInputObjectSchema } from './AgreementCreateWithoutDevice_agreeentsInput.schema';
import { AgreementUncheckedCreateWithoutDevice_agreeentsInputObjectSchema as AgreementUncheckedCreateWithoutDevice_agreeentsInputObjectSchema } from './AgreementUncheckedCreateWithoutDevice_agreeentsInput.schema';
import { AgreementCreateOrConnectWithoutDevice_agreeentsInputObjectSchema as AgreementCreateOrConnectWithoutDevice_agreeentsInputObjectSchema } from './AgreementCreateOrConnectWithoutDevice_agreeentsInput.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementCreateWithoutDevice_agreeentsInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutDevice_agreeentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgreementCreateOrConnectWithoutDevice_agreeentsInputObjectSchema).optional(),
  connect: z.lazy(() => AgreementWhereUniqueInputObjectSchema).optional()
}).strict();
export const AgreementCreateNestedOneWithoutDevice_agreeentsInputObjectSchema: z.ZodType<Prisma.AgreementCreateNestedOneWithoutDevice_agreeentsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateNestedOneWithoutDevice_agreeentsInput>;
export const AgreementCreateNestedOneWithoutDevice_agreeentsInputObjectZodSchema = makeSchema();
