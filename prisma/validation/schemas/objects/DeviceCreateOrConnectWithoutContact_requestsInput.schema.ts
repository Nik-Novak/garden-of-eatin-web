import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceCreateWithoutContact_requestsInputObjectSchema as DeviceCreateWithoutContact_requestsInputObjectSchema } from './DeviceCreateWithoutContact_requestsInput.schema';
import { DeviceUncheckedCreateWithoutContact_requestsInputObjectSchema as DeviceUncheckedCreateWithoutContact_requestsInputObjectSchema } from './DeviceUncheckedCreateWithoutContact_requestsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeviceCreateWithoutContact_requestsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutContact_requestsInputObjectSchema)])
}).strict();
export const DeviceCreateOrConnectWithoutContact_requestsInputObjectSchema: z.ZodType<Prisma.DeviceCreateOrConnectWithoutContact_requestsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateOrConnectWithoutContact_requestsInput>;
export const DeviceCreateOrConnectWithoutContact_requestsInputObjectZodSchema = makeSchema();
