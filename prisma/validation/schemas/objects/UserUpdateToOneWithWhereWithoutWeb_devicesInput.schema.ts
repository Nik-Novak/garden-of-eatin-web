import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutWeb_devicesInputObjectSchema as UserUpdateWithoutWeb_devicesInputObjectSchema } from './UserUpdateWithoutWeb_devicesInput.schema';
import { UserUncheckedUpdateWithoutWeb_devicesInputObjectSchema as UserUncheckedUpdateWithoutWeb_devicesInputObjectSchema } from './UserUncheckedUpdateWithoutWeb_devicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutWeb_devicesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWeb_devicesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutWeb_devicesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWeb_devicesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWeb_devicesInput>;
export const UserUpdateToOneWithWhereWithoutWeb_devicesInputObjectZodSchema = makeSchema();
