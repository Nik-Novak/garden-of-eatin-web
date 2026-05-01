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
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { QRCodeUncheckedUpdateManyWithoutScannable_documentNestedInputObjectSchema as QRCodeUncheckedUpdateManyWithoutScannable_documentNestedInputObjectSchema } from './QRCodeUncheckedUpdateManyWithoutScannable_documentNestedInput.schema';
import { ScannableDocumentMealHitUncheckedUpdateManyWithoutScannable_documentNestedInputObjectSchema as ScannableDocumentMealHitUncheckedUpdateManyWithoutScannable_documentNestedInputObjectSchema } from './ScannableDocumentMealHitUncheckedUpdateManyWithoutScannable_documentNestedInput.schema'

const makeSchema = () => z.object({
  type: z.union([ScannableDocumentTypeSchema, z.lazy(() => EnumScannableDocumentTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  place: z.union([z.lazy(() => PlaceUpdateEnvelopeInputObjectSchema), z.lazy(() => PlaceCreateInputObjectSchema)]).optional(),
  location: z.union([z.lazy(() => PointUpdateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]).optional(),
  timezone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  print_settings: z.union([z.lazy(() => PrintSettingsUpdateEnvelopeInputObjectSchema), z.lazy(() => PrintSettingsCreateInputObjectSchema)]).optional(),
  file_url: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  qr_codes: z.lazy(() => QRCodeUncheckedUpdateManyWithoutScannable_documentNestedInputObjectSchema).optional(),
  scannable_document_meal_hits: z.lazy(() => ScannableDocumentMealHitUncheckedUpdateManyWithoutScannable_documentNestedInputObjectSchema).optional()
}).strict();
export const ScannableDocumentUncheckedUpdateWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.ScannableDocumentUncheckedUpdateWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentUncheckedUpdateWithoutSubmitterInput>;
export const ScannableDocumentUncheckedUpdateWithoutSubmitterInputObjectZodSchema = makeSchema();
