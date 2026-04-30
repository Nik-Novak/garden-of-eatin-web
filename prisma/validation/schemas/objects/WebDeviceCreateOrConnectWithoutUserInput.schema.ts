import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './WebDeviceWhereUniqueInput.schema';
import { WebDeviceCreateWithoutUserInputObjectSchema as WebDeviceCreateWithoutUserInputObjectSchema } from './WebDeviceCreateWithoutUserInput.schema';
import { WebDeviceUncheckedCreateWithoutUserInputObjectSchema as WebDeviceUncheckedCreateWithoutUserInputObjectSchema } from './WebDeviceUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WebDeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WebDeviceCreateWithoutUserInputObjectSchema), z.lazy(() => WebDeviceUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const WebDeviceCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.WebDeviceCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceCreateOrConnectWithoutUserInput>;
export const WebDeviceCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
