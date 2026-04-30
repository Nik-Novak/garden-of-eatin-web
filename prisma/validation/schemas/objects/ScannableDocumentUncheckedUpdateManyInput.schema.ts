import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentTypeSchema } from '../enums/ScannableDocumentType.schema';
import { EnumScannableDocumentTypeFieldUpdateOperationsInputObjectSchema as EnumScannableDocumentTypeFieldUpdateOperationsInputObjectSchema } from './EnumScannableDocumentTypeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PlaceUpdateEnvelopeInputObjectSchema as PlaceUpdateEnvelopeInputObjectSchema } from './PlaceUpdateEnvelopeInput.schema';
import { PlaceCreateInputObjectSchema as PlaceCreateInputObjectSchema } from './PlaceCreateInput.schema';
import { PointUpdateEnvelopeInputObjectSchema as PointUpdateEnvelopeInputObjectSchema } from './PointUpdateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { PrintSettingsUpdateEnvelopeInputObjectSchema as PrintSettingsUpdateEnvelopeInputObjectSchema } from './PrintSettingsUpdateEnvelopeInput.schema';
import { PrintSettingsCreateInputObjectSchema as PrintSettingsCreateInputObjectSchema } from './PrintSettingsCreateInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  type: z.union([ScannableDocumentTypeSchema, z.lazy(() => EnumScannableDocumentTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  place: z.union([z.lazy(() => PlaceUpdateEnvelopeInputObjectSchema), z.lazy(() => PlaceCreateInputObjectSchema)]).optional(),
  location: z.union([z.lazy(() => PointUpdateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]).optional(),
  timezone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  print_settings: z.union([z.lazy(() => PrintSettingsUpdateEnvelopeInputObjectSchema), z.lazy(() => PrintSettingsCreateInputObjectSchema)]).optional(),
  file_url: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  submitter_id: z.union([z.string().max(24), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ScannableDocumentUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.ScannableDocumentUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentUncheckedUpdateManyInput>;
export const ScannableDocumentUncheckedUpdateManyInputObjectZodSchema = makeSchema();
