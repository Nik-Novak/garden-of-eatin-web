import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { DeviceWhereUniqueInputObjectSchema as DeviceWhereUniqueInputObjectSchema } from './DeviceWhereUniqueInput.schema';
import { DeviceCreateWithoutBugsInputObjectSchema as DeviceCreateWithoutBugsInputObjectSchema } from './DeviceCreateWithoutBugsInput.schema';
import { DeviceUncheckedCreateWithoutBugsInputObjectSchema as DeviceUncheckedCreateWithoutBugsInputObjectSchema } from './DeviceUncheckedCreateWithoutBugsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeviceCreateWithoutBugsInputObjectSchema), z.lazy(() => DeviceUncheckedCreateWithoutBugsInputObjectSchema)])
}).strict();
export const DeviceCreateOrConnectWithoutBugsInputObjectSchema: z.ZodType<Prisma.DeviceCreateOrConnectWithoutBugsInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceCreateOrConnectWithoutBugsInput>;
export const DeviceCreateOrConnectWithoutBugsInputObjectZodSchema = makeSchema();
