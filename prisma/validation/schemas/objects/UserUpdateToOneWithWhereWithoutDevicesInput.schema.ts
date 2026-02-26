import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutDevicesInputObjectSchema as UserUpdateWithoutDevicesInputObjectSchema } from './UserUpdateWithoutDevicesInput.schema';
import { UserUncheckedUpdateWithoutDevicesInputObjectSchema as UserUncheckedUpdateWithoutDevicesInputObjectSchema } from './UserUncheckedUpdateWithoutDevicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutDevicesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDevicesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutDevicesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDevicesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDevicesInput>;
export const UserUpdateToOneWithWhereWithoutDevicesInputObjectZodSchema = makeSchema();
