import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceCreateWithoutContact_requestsInputObjectSchema as WebDeviceCreateWithoutContact_requestsInputObjectSchema } from './WebDeviceCreateWithoutContact_requestsInput.schema';
import { WebDeviceUncheckedCreateWithoutContact_requestsInputObjectSchema as WebDeviceUncheckedCreateWithoutContact_requestsInputObjectSchema } from './WebDeviceUncheckedCreateWithoutContact_requestsInput.schema';
import { WebDeviceCreateOrConnectWithoutContact_requestsInputObjectSchema as WebDeviceCreateOrConnectWithoutContact_requestsInputObjectSchema } from './WebDeviceCreateOrConnectWithoutContact_requestsInput.schema';
import { WebDeviceUpsertWithoutContact_requestsInputObjectSchema as WebDeviceUpsertWithoutContact_requestsInputObjectSchema } from './WebDeviceUpsertWithoutContact_requestsInput.schema';
import { WebDeviceWhereInputObjectSchema as WebDeviceWhereInputObjectSchema } from './WebDeviceWhereInput.schema';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './WebDeviceWhereUniqueInput.schema';
import { WebDeviceUpdateToOneWithWhereWithoutContact_requestsInputObjectSchema as WebDeviceUpdateToOneWithWhereWithoutContact_requestsInputObjectSchema } from './WebDeviceUpdateToOneWithWhereWithoutContact_requestsInput.schema';
import { WebDeviceUpdateWithoutContact_requestsInputObjectSchema as WebDeviceUpdateWithoutContact_requestsInputObjectSchema } from './WebDeviceUpdateWithoutContact_requestsInput.schema';
import { WebDeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema as WebDeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema } from './WebDeviceUncheckedUpdateWithoutContact_requestsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WebDeviceCreateWithoutContact_requestsInputObjectSchema), z.lazy(() => WebDeviceUncheckedCreateWithoutContact_requestsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WebDeviceCreateOrConnectWithoutContact_requestsInputObjectSchema).optional(),
  upsert: z.lazy(() => WebDeviceUpsertWithoutContact_requestsInputObjectSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([z.boolean(), z.lazy(() => WebDeviceWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => WebDeviceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WebDeviceUpdateToOneWithWhereWithoutContact_requestsInputObjectSchema), z.lazy(() => WebDeviceUpdateWithoutContact_requestsInputObjectSchema), z.lazy(() => WebDeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema)]).optional()
}).strict();
export const WebDeviceUpdateOneWithoutContact_requestsNestedInputObjectSchema: z.ZodType<Prisma.WebDeviceUpdateOneWithoutContact_requestsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUpdateOneWithoutContact_requestsNestedInput>;
export const WebDeviceUpdateOneWithoutContact_requestsNestedInputObjectZodSchema = makeSchema();
