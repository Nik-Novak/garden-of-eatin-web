import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementCreateWithoutDevice_agreeentsInputObjectSchema as AgreementCreateWithoutDevice_agreeentsInputObjectSchema } from './AgreementCreateWithoutDevice_agreeentsInput.schema';
import { AgreementUncheckedCreateWithoutDevice_agreeentsInputObjectSchema as AgreementUncheckedCreateWithoutDevice_agreeentsInputObjectSchema } from './AgreementUncheckedCreateWithoutDevice_agreeentsInput.schema';
import { AgreementCreateOrConnectWithoutDevice_agreeentsInputObjectSchema as AgreementCreateOrConnectWithoutDevice_agreeentsInputObjectSchema } from './AgreementCreateOrConnectWithoutDevice_agreeentsInput.schema';
import { AgreementUpsertWithoutDevice_agreeentsInputObjectSchema as AgreementUpsertWithoutDevice_agreeentsInputObjectSchema } from './AgreementUpsertWithoutDevice_agreeentsInput.schema';
import { AgreementWhereUniqueInputObjectSchema as AgreementWhereUniqueInputObjectSchema } from './AgreementWhereUniqueInput.schema';
import { AgreementUpdateToOneWithWhereWithoutDevice_agreeentsInputObjectSchema as AgreementUpdateToOneWithWhereWithoutDevice_agreeentsInputObjectSchema } from './AgreementUpdateToOneWithWhereWithoutDevice_agreeentsInput.schema';
import { AgreementUpdateWithoutDevice_agreeentsInputObjectSchema as AgreementUpdateWithoutDevice_agreeentsInputObjectSchema } from './AgreementUpdateWithoutDevice_agreeentsInput.schema';
import { AgreementUncheckedUpdateWithoutDevice_agreeentsInputObjectSchema as AgreementUncheckedUpdateWithoutDevice_agreeentsInputObjectSchema } from './AgreementUncheckedUpdateWithoutDevice_agreeentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgreementCreateWithoutDevice_agreeentsInputObjectSchema), z.lazy(() => AgreementUncheckedCreateWithoutDevice_agreeentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AgreementCreateOrConnectWithoutDevice_agreeentsInputObjectSchema).optional(),
  upsert: z.lazy(() => AgreementUpsertWithoutDevice_agreeentsInputObjectSchema).optional(),
  connect: z.lazy(() => AgreementWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AgreementUpdateToOneWithWhereWithoutDevice_agreeentsInputObjectSchema), z.lazy(() => AgreementUpdateWithoutDevice_agreeentsInputObjectSchema), z.lazy(() => AgreementUncheckedUpdateWithoutDevice_agreeentsInputObjectSchema)]).optional()
}).strict();
export const AgreementUpdateOneRequiredWithoutDevice_agreeentsNestedInputObjectSchema: z.ZodType<Prisma.AgreementUpdateOneRequiredWithoutDevice_agreeentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUpdateOneRequiredWithoutDevice_agreeentsNestedInput>;
export const AgreementUpdateOneRequiredWithoutDevice_agreeentsNestedInputObjectZodSchema = makeSchema();
