import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AccountCountOrderByAggregateInputObjectSchema as AccountCountOrderByAggregateInputObjectSchema } from './AccountCountOrderByAggregateInput.schema';
import { AccountMaxOrderByAggregateInputObjectSchema as AccountMaxOrderByAggregateInputObjectSchema } from './AccountMaxOrderByAggregateInput.schema';
import { AccountMinOrderByAggregateInputObjectSchema as AccountMinOrderByAggregateInputObjectSchema } from './AccountMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  accountId: SortOrderSchema.optional(),
  providerId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  accessToken: SortOrderSchema.optional(),
  refreshToken: SortOrderSchema.optional(),
  idToken: SortOrderSchema.optional(),
  accessTokenExpiresAt: SortOrderSchema.optional(),
  refreshTokenExpiresAt: SortOrderSchema.optional(),
  scope: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AccountOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountOrderByWithAggregationInput>;
export const AccountOrderByWithAggregationInputObjectZodSchema = makeSchema();
