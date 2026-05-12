import * as z from 'zod';

export const InventoryCategorySchema = z.enum(['RefrigeratedGoods', 'FrozenGoods', 'FreshProduce', 'Meat', 'Dairy', 'DryGoods', 'PreparedMeals', 'Drinks', 'HygieneProducts', 'BabySupplies', 'Clothing', 'Gift_GasCards', 'PetFood', 'PetAccessories'])

export type InventoryCategory = z.infer<typeof InventoryCategorySchema>;