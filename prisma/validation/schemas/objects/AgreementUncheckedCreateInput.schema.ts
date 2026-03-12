import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementTypeSchema } from '../enums/AgreementType.schema';
import { DeviceAgreementUncheckedCreateNestedManyWithoutAgreementInputObjectSchema as DeviceAgreementUncheckedCreateNestedManyWithoutAgreementInputObjectSchema } from './DeviceAgreementUncheckedCreateNestedManyWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  agreement_type: AgreementTypeSchema,
  effective_date: z.coerce.date(),
  content_md: z.string(),
  created_at: z.coerce.date().optional(),
  device_agreeents: z.lazy(() => DeviceAgreementUncheckedCreateNestedManyWithoutAgreementInputObjectSchema).optional()
}).strict();
export const AgreementUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AgreementUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementUncheckedCreateInput>;
export const AgreementUncheckedCreateInputObjectZodSchema = makeSchema();
