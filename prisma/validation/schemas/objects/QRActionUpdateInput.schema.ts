import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QRActionTypeSchema } from '../enums/QRActionType.schema';
import { EnumQRActionTypeFieldUpdateOperationsInputObjectSchema as EnumQRActionTypeFieldUpdateOperationsInputObjectSchema } from './EnumQRActionTypeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  type: z.union([QRActionTypeSchema, z.lazy(() => EnumQRActionTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  payload: z.union([jsonSchema, jsonSchema]).optional()
}).strict();
export const QRActionUpdateInputObjectSchema: z.ZodType<Prisma.QRActionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.QRActionUpdateInput>;
export const QRActionUpdateInputObjectZodSchema = makeSchema();
