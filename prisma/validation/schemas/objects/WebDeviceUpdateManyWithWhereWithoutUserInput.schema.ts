import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceScalarWhereInputObjectSchema as WebDeviceScalarWhereInputObjectSchema } from './WebDeviceScalarWhereInput.schema';
import { WebDeviceUpdateManyMutationInputObjectSchema as WebDeviceUpdateManyMutationInputObjectSchema } from './WebDeviceUpdateManyMutationInput.schema';
import { WebDeviceUncheckedUpdateManyWithoutUserInputObjectSchema as WebDeviceUncheckedUpdateManyWithoutUserInputObjectSchema } from './WebDeviceUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WebDeviceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WebDeviceUpdateManyMutationInputObjectSchema), z.lazy(() => WebDeviceUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const WebDeviceUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.WebDeviceUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUpdateManyWithWhereWithoutUserInput>;
export const WebDeviceUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
