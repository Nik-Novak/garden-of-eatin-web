import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceCreateWithoutContact_requestsInputObjectSchema as DeviceCreateWithoutContact_requestsInputObjectSchema } from './DeviceCreateWithoutContact_requestsInput.schema';
import { DeviceUncheckedCreateWithoutContact_requestsInputObjectSchema as DeviceUncheckedCreateWithoutContact_requestsInputObjectSchema } from './DeviceUncheckedCreateWithoutContact_requestsInput.schema';
import { DeviceCreateOrConnectWithoutContact_requestsInputObjectSchema as DeviceCreateOrConnectWithoutContact_requestsInputObjectSchema } from './DeviceCreateOrConnectWithoutContact_requestsInput.schema';
import { DeviceUpsertWithoutContact_requestsInputObjectSchema as DeviceUpsertWithoutContact_requestsInputObjectSchema } from './DeviceUpsertWithoutContact_requestsInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceUpdateToOneWithWhereWithoutContact_requestsInputObjectSchema as DeviceUpdateToOneWithWhereWithoutContact_requestsInputObjectSchema } from './DeviceUpdateToOneWithWhereWithoutContact_requestsInput.schema';
import { DeviceUpdateWithoutContact_requestsInputObjectSchema as DeviceUpdateWithoutContact_requestsInputObjectSchema } from './DeviceUpdateWithoutContact_requestsInput.schema';
import { DeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema as DeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema } from './DeviceUncheckedUpdateWithoutContact_requestsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutContact_requestsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutContact_requestsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutContact_requestsInputObjectSchema).optional(),
  upsert: z.lazy(() => DeviceUpsertWithoutContact_requestsInputObjectSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([z.boolean(), z.lazy(() => DeviceWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DeviceUpdateToOneWithWhereWithoutContact_requestsInputObjectSchema), z.lazy(() => DeviceUpdateWithoutContact_requestsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema)]).optional()
}).strict();
export const DeviceUpdateOneWithoutContact_requestsNestedInputObjectSchema: z.ZodType<Prisma.DeviceUpdateOneWithoutContact_requestsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateOneWithoutContact_requestsNestedInput>;
export const DeviceUpdateOneWithoutContact_requestsNestedInputObjectZodSchema = makeSchema();
