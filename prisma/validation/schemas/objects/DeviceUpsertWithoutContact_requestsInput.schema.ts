import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { DeviceUpdateWithoutContact_requestsInputObjectSchema as DeviceUpdateWithoutContact_requestsInputObjectSchema } from './DeviceUpdateWithoutContact_requestsInput.schema';
import { DeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema as DeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema } from './DeviceUncheckedUpdateWithoutContact_requestsInput.schema';
import { DeviceCreateWithoutContact_requestsInputObjectSchema as DeviceCreateWithoutContact_requestsInputObjectSchema } from './DeviceCreateWithoutContact_requestsInput.schema';
import { DeviceUncheckedCreateWithoutContact_requestsInputObjectSchema as DeviceUncheckedCreateWithoutContact_requestsInputObjectSchema } from './DeviceUncheckedCreateWithoutContact_requestsInput.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DeviceUpdateWithoutContact_requestsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema)]),
  create: z.union([z.lazy(() => DeviceCreateWithoutContact_requestsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutContact_requestsInputObjectSchema)]),
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional()
}).strict();
export const DeviceUpsertWithoutContact_requestsInputObjectSchema: z.ZodType<Prisma.DeviceUpsertWithoutContact_requestsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpsertWithoutContact_requestsInput>;
export const DeviceUpsertWithoutContact_requestsInputObjectZodSchema = makeSchema();
