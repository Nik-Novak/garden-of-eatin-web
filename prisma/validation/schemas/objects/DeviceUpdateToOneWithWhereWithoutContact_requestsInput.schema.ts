import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema';
import { DeviceUpdateWithoutContact_requestsInputObjectSchema as DeviceUpdateWithoutContact_requestsInputObjectSchema } from './DeviceUpdateWithoutContact_requestsInput.schema';
import { DeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema as DeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema } from './DeviceUncheckedUpdateWithoutContact_requestsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DeviceUpdateWithoutContact_requestsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutContact_requestsInputObjectSchema)])
}).strict();
export const DeviceUpdateToOneWithWhereWithoutContact_requestsInputObjectSchema: z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutContact_requestsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateToOneWithWhereWithoutContact_requestsInput>;
export const DeviceUpdateToOneWithWhereWithoutContact_requestsInputObjectZodSchema = makeSchema();
