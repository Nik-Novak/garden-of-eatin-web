import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceWhereInputObjectSchema as WebDeviceWhereInputObjectSchema } from './WebDeviceWhereInput.schema';
import { WebDeviceUpdateWithoutContact_requestsInputObjectSchema as WebDeviceUpdateWithoutContact_requestsInputObjectSchema } from './WebDeviceUpdateWithoutContact_requestsInput.schema';
import { WebDeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema as WebDeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema } from './WebDeviceUncheckedUpdateWithoutContact_requestsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WebDeviceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WebDeviceUpdateWithoutContact_requestsInputObjectSchema), z.lazy(() => WebDeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema)])
}).strict();
export const WebDeviceUpdateToOneWithWhereWithoutContact_requestsInputObjectSchema: z.ZodType<Prisma.WebDeviceUpdateToOneWithWhereWithoutContact_requestsInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUpdateToOneWithWhereWithoutContact_requestsInput>;
export const WebDeviceUpdateToOneWithWhereWithoutContact_requestsInputObjectZodSchema = makeSchema();
