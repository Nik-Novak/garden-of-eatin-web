import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceUpdateWithoutContact_requestsInputObjectSchema as WebDeviceUpdateWithoutContact_requestsInputObjectSchema } from './WebDeviceUpdateWithoutContact_requestsInput.schema';
import { WebDeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema as WebDeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema } from './WebDeviceUncheckedUpdateWithoutContact_requestsInput.schema';
import { WebDeviceCreateWithoutContact_requestsInputObjectSchema as WebDeviceCreateWithoutContact_requestsInputObjectSchema } from './WebDeviceCreateWithoutContact_requestsInput.schema';
import { WebDeviceUncheckedCreateWithoutContact_requestsInputObjectSchema as WebDeviceUncheckedCreateWithoutContact_requestsInputObjectSchema } from './WebDeviceUncheckedCreateWithoutContact_requestsInput.schema';
import { WebDeviceWhereInputObjectSchema as WebDeviceWhereInputObjectSchema } from './WebDeviceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WebDeviceUpdateWithoutContact_requestsInputObjectSchema), z.lazy(() => WebDeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema)]),
  create: z.union([z.lazy(() => WebDeviceCreateWithoutContact_requestsInputObjectSchema), z.lazy(() => WebDeviceUncheckedCreateWithoutContact_requestsInputObjectSchema)]),
  where: z.lazy(() => WebDeviceWhereInputObjectSchema).optional()
}).strict();
export const WebDeviceUpsertWithoutContact_requestsInputObjectSchema: z.ZodType<Prisma.WebDeviceUpsertWithoutContact_requestsInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUpsertWithoutContact_requestsInput>;
export const WebDeviceUpsertWithoutContact_requestsInputObjectZodSchema = makeSchema();
