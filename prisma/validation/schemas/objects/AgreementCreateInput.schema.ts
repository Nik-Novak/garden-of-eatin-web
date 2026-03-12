import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AgreementTypeSchema } from '../enums/AgreementType.schema';
import { DeviceAgreementCreateNestedManyWithoutAgreementInputObjectSchema as DeviceAgreementCreateNestedManyWithoutAgreementInputObjectSchema } from './DeviceAgreementCreateNestedManyWithoutAgreementInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  agreement_type: AgreementTypeSchema,
  effective_date: z.coerce.date(),
  content_md: z.string(),
  created_at: z.coerce.date().optional(),
  device_agreeents: z.lazy(() => DeviceAgreementCreateNestedManyWithoutAgreementInputObjectSchema).optional()
}).strict();
export const AgreementCreateInputObjectSchema: z.ZodType<Prisma.AgreementCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgreementCreateInput>;
export const AgreementCreateInputObjectZodSchema = makeSchema();
