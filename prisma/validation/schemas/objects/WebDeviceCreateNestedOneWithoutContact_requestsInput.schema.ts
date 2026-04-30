import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceCreateWithoutContact_requestsInputObjectSchema as WebDeviceCreateWithoutContact_requestsInputObjectSchema } from './WebDeviceCreateWithoutContact_requestsInput.schema';
import { WebDeviceUncheckedCreateWithoutContact_requestsInputObjectSchema as WebDeviceUncheckedCreateWithoutContact_requestsInputObjectSchema } from './WebDeviceUncheckedCreateWithoutContact_requestsInput.schema';
import { WebDeviceCreateOrConnectWithoutContact_requestsInputObjectSchema as WebDeviceCreateOrConnectWithoutContact_requestsInputObjectSchema } from './WebDeviceCreateOrConnectWithoutContact_requestsInput.schema';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './WebDeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WebDeviceCreateWithoutContact_requestsInputObjectSchema), z.lazy(() => WebDeviceUncheckedCreateWithoutContact_requestsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WebDeviceCreateOrConnectWithoutContact_requestsInputObjectSchema).optional(),
  connect: z.lazy(() => WebDeviceWhereUniqueInputObjectSchema).optional()
}).strict();
export const WebDeviceCreateNestedOneWithoutContact_requestsInputObjectSchema: z.ZodType<Prisma.WebDeviceCreateNestedOneWithoutContact_requestsInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceCreateNestedOneWithoutContact_requestsInput>;
export const WebDeviceCreateNestedOneWithoutContact_requestsInputObjectZodSchema = makeSchema();
