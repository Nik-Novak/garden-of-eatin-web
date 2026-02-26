import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DeviceCreateWithoutBugsInputObjectSchema as DeviceCreateWithoutBugsInputObjectSchema } from './DeviceCreateWithoutBugsInput.schema';
import { DeviceUncheckedCreateWithoutBugsInputObjectSchema as DeviceUncheckedCreateWithoutBugsInputObjectSchema } from './DeviceUncheckedCreateWithoutBugsInput.schema';
import { DeviceCreateOrConnectWithoutBugsInputObjectSchema as DeviceCreateOrConnectWithoutBugsInputObjectSchema } from './DeviceCreateOrConnectWithoutBugsInput.schema';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeviceCreateWithoutBugsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutBugsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeviceCreateOrConnectWithoutBugsInputObjectSchema).optional(),
  connect: z.lazy(() => DeviceWhereUniqueInputObjectSchema).optional()
}).strict();
export const DeviceCreateNestedOneWithoutBugsInputObjectSchema: z.ZodType<Prisma.DeviceCreateNestedOneWithoutBugsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateNestedOneWithoutBugsInput>;
export const DeviceCreateNestedOneWithoutBugsInputObjectZodSchema = makeSchema();
