import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { DeviceCreateWithoutBugsInputObjectSchema as DeviceCreateWithoutBugsInputObjectSchema } from './DeviceCreateWithoutBugsInput.schema';
import { DeviceUncheckedCreateWithoutBugsInputObjectSchema as DeviceUncheckedCreateWithoutBugsInputObjectSchema } from './DeviceUncheckedCreateWithoutBugsInput.schema';
import { DeviceCreateOrConnectWithoutBugsInputObjectSchema as DeviceCreateOrConnectWithoutBugsInputObjectSchema } from './DeviceCreateOrConnectWithoutBugsInput.schema';
import { DeviceUpsertWithoutBugsInputObjectSchema as DeviceUpsertWithoutBugsInputObjectSchema } from './DeviceUpsertWithoutBugsInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceUpdateToOneWithWhereWithoutBugsInputObjectSchema as DeviceUpdateToOneWithWhereWithoutBugsInputObjectSchema } from './DeviceUpdateToOneWithWhereWithoutBugsInput.schema';
import { DeviceUpdateWithoutBugsInputObjectSchema as DeviceUpdateWithoutBugsInputObjectSchema } from './DeviceUpdateWithoutBugsInput.schema';
import { DeviceUncheckedUpdateWithoutBugsInputObjectSchema as DeviceUncheckedUpdateWithoutBugsInputObjectSchema } from './DeviceUncheckedUpdateWithoutBugsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutBugsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutBugsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutBugsInputObjectSchema).optional(),
  upsert: z.lazy(() => DeviceUpsertWithoutBugsInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DeviceUpdateToOneWithWhereWithoutBugsInputObjectSchema), z.lazy(() => DeviceUpdateWithoutBugsInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateWithoutBugsInputObjectSchema)]).optional()
}).strict();
export const DeviceUpdateOneRequiredWithoutBugsNestedInputObjectSchema: z.ZodType<Prisma.DeviceUpdateOneRequiredWithoutBugsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateOneRequiredWithoutBugsNestedInput>;
export const DeviceUpdateOneRequiredWithoutBugsNestedInputObjectZodSchema = makeSchema();
