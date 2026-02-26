import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { ContactRequestWhereInputObjectSchema as ContactRequestWhereInputObjectSchema } from './ContactRequestWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactRequestWhereInputObjectSchema).optional()
}).strict();
export const DeviceCountOutputTypeCountContactRequestsArgsObjectSchema = makeSchema();
export const DeviceCountOutputTypeCountContactRequestsArgsObjectZodSchema = makeSchema();
