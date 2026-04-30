import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './WebDeviceWhereUniqueInput.schema';
import { WebDeviceUpdateWithoutUserInputObjectSchema as WebDeviceUpdateWithoutUserInputObjectSchema } from './WebDeviceUpdateWithoutUserInput.schema';
import { WebDeviceUncheckedUpdateWithoutUserInputObjectSchema as WebDeviceUncheckedUpdateWithoutUserInputObjectSchema } from './WebDeviceUncheckedUpdateWithoutUserInput.schema';
import { WebDeviceCreateWithoutUserInputObjectSchema as WebDeviceCreateWithoutUserInputObjectSchema } from './WebDeviceCreateWithoutUserInput.schema';
import { WebDeviceUncheckedCreateWithoutUserInputObjectSchema as WebDeviceUncheckedCreateWithoutUserInputObjectSchema } from './WebDeviceUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WebDeviceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WebDeviceUpdateWithoutUserInputObjectSchema), z.lazy(() => WebDeviceUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => WebDeviceCreateWithoutUserInputObjectSchema), z.lazy(() => WebDeviceUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const WebDeviceUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.WebDeviceUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUpsertWithWhereUniqueWithoutUserInput>;
export const WebDeviceUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
