import * as z from 'zod';

export const InventoryCategorySchema = z.enum(['FreshProduce', 'FrozenMeat', 'Dairy', 'DryGoods', 'PreparedMeals', 'HygieneProducts', 'BabySupplies', 'Clothing', 'Gift_GasCards'])

export type InventoryCategory = z.infer<typeof InventoryCategorySchema>;