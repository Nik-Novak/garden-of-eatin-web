import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceCreateWithoutContact_requestsInputObjectSchema as DeviceCreateWithoutContact_requestsInputObjectSchema } from './DeviceCreateWithoutContact_requestsInput.schema';
import { DeviceUncheckedCreateWithoutContact_requestsInputObjectSchema as DeviceUncheckedCreateWithoutContact_requestsInputObjectSchema } from './DeviceUncheckedCreateWithoutContact_requestsInput.schema';
import { DeviceCreateOrConnectWithoutContact_requestsInputObjectSchema as DeviceCreateOrConnectWithoutContact_requestsInputObjectSchema } from './DeviceCreateOrConnectWithoutContact_requestsInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutContact_requestsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutContact_requestsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutContact_requestsInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional()
}).strict();
export const DeviceCreateNestedOneWithoutContact_requestsInputObjectSchema: z.ZodType<Prisma.DeviceCreateNestedOneWithoutContact_requestsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateNestedOneWithoutContact_requestsInput>;
export const DeviceCreateNestedOneWithoutContact_requestsInputObjectZodSchema = makeSchema();
