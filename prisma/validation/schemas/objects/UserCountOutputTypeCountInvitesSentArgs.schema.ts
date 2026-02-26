import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { InviteWhereInputObjectSchema as InviteWhereInputObjectSchema } from './InviteWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InviteWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountInvitesSentArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountInvitesSentArgsObjectZodSchema = makeSchema();
