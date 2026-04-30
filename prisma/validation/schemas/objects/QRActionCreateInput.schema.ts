import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionTypeSchema } from '../enums/QRActionType.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  type: QRActionTypeSchema,
  label: z.string().optional().nullable(),
  payload: jsonSchema
}).strict();
export const QRActionCreateInputObjectSchema: z.ZodType<Prisma.QRActionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.QRActionCreateInput>;
export const QRActionCreateInputObjectZodSchema = makeSchema();
