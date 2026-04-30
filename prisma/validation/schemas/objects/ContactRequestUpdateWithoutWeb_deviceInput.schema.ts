import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DeviceUpdateOneWithoutContact_requestsNestedInputObjectSchema as DeviceUpdateOneWithoutContact_requestsNestedInputObjectSchema } from './DeviceUpdateOneWithoutContact_requestsNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  device: z.lazy(() => DeviceUpdateOneWithoutContact_requestsNestedInputObjectSchema).optional()
}).strict();
export const ContactRequestUpdateWithoutWeb_deviceInputObjectSchema: z.ZodType<Prisma.ContactRequestUpdateWithoutWeb_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactRequestUpdateWithoutWeb_deviceInput>;
export const ContactRequestUpdateWithoutWeb_deviceInputObjectZodSchema = makeSchema();
