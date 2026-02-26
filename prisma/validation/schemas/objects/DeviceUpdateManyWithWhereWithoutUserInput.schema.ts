import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { DeviceScalarWhereInputObjectSchema as DeviceScalarWhereInputObjectSchema } from './DeviceScalarWhereInput.schema';
import { DeviceUpdateManyMutationInputObjectSchema as DeviceUpdateManyMutationInputObjectSchema } from './DeviceUpdateManyMutationInput.schema';
import { DeviceUncheckedUpdateManyWithoutUserInputObjectSchema as DeviceUncheckedUpdateManyWithoutUserInputObjectSchema } from './DeviceUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeviceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DeviceUpdateManyMutationInputObjectSchema), z.lazy(() => DeviceUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const DeviceUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.DeviceUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceUpdateManyWithWhereWithoutUserInput>;
export const DeviceUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
