import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceScalarWhereInputObjectSchema as WebDeviceScalarWhereInputObjectSchema } from './WebDeviceScalarWhereInput.schema';
import { WebDeviceUpdateManyMutationInputObjectSchema as WebDeviceUpdateManyMutationInputObjectSchema } from './WebDeviceUpdateManyMutationInput.schema';
import { WebDeviceUncheckedUpdateManyWithoutDeviceInputObjectSchema as WebDeviceUncheckedUpdateManyWithoutDeviceInputObjectSchema } from './WebDeviceUncheckedUpdateManyWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WebDeviceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WebDeviceUpdateManyMutationInputObjectSchema), z.lazy(() => WebDeviceUncheckedUpdateManyWithoutDeviceInputObjectSchema)])
}).strict();
export const WebDeviceUpdateManyWithWhereWithoutDeviceInputObjectSchema: z.ZodType<Prisma.WebDeviceUpdateManyWithWhereWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceUpdateManyWithWhereWithoutDeviceInput>;
export const WebDeviceUpdateManyWithWhereWithoutDeviceInputObjectZodSchema = makeSchema();
