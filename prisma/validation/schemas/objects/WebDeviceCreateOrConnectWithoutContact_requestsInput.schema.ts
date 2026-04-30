import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './WebDeviceWhereUniqueInput.schema';
import { WebDeviceCreateWithoutContact_requestsInputObjectSchema as WebDeviceCreateWithoutContact_requestsInputObjectSchema } from './WebDeviceCreateWithoutContact_requestsInput.schema';
import { WebDeviceUncheckedCreateWithoutContact_requestsInputObjectSchema as WebDeviceUncheckedCreateWithoutContact_requestsInputObjectSchema } from './WebDeviceUncheckedCreateWithoutContact_requestsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WebDeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WebDeviceCreateWithoutContact_requestsInputObjectSchema), z.lazy(() => WebDeviceUncheckedCreateWithoutContact_requestsInputObjectSchema)])
}).strict();
export const WebDeviceCreateOrConnectWithoutContact_requestsInputObjectSchema: z.ZodType<Prisma.WebDeviceCreateOrConnectWithoutContact_requestsInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceCreateOrConnectWithoutContact_requestsInput>;
export const WebDeviceCreateOrConnectWithoutContact_requestsInputObjectZodSchema = makeSchema();
