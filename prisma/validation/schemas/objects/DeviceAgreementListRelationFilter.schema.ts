import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceAgreementWhereInputObjectSchema as DeviceAgreementWhereInputObjectSchema } from './DeviceAgreementWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => DeviceAgreementWhereInputObjectSchema).optional(),
  some: z.lazy(() => DeviceAgreementWhereInputObjectSchema).optional(),
  none: z.lazy(() => DeviceAgreementWhereInputObjectSchema).optional()
}).strict();
export const DeviceAgreementListRelationFilterObjectSchema: z.ZodType<Prisma.DeviceAgreementListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DeviceAgreementListRelationFilter>;
export const DeviceAgreementListRelationFilterObjectZodSchema = makeSchema();
