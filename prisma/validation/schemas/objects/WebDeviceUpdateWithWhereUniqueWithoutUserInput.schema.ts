import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceWhereUniqueInputObjectSchema as WebDeviceWhereUniqueInputObjectSchema } from './WebDeviceWhereUniqueInput.schema';
import { WebDeviceUpdateWithoutUserInputObjectSchema as WebDeviceUpdateWithoutUserInputObjectSchema } from './WebDeviceUpdateWithoutUserInput.schema';
import { WebDeviceUncheckedUpdateWithoutUserInputObjectSchema as WebDeviceUncheckedUpdateWithoutUserInputObjectSchema } from './WebDeviceUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WebDeviceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WebDeviceUpdateWithoutUserInputObjectSchema), z.lazy(() => WebDeviceUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const WebDeviceUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.WebDeviceUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUpdateWithWhereUniqueWithoutUserInput>;
export const WebDeviceUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
