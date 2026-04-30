import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentWhereInputObjectSchema as ScannableDocumentWhereInputObjectSchema } from './ScannableDocumentWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScannableDocumentWhereInputObjectSchema).optional()
}).strict();
export const DeviceCountOutputTypeCountScannableDocumentsArgsObjectSchema = makeSchema();
export const DeviceCountOutputTypeCountScannableDocumentsArgsObjectZodSchema = makeSchema();
