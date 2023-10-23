// middleware/databaseMiddleware.ts
import { useDatabaseManager } from '../../lib'; // Import your DatabaseManager

export default defineEventHandler((event) => {
  // App Database instance
  const databaseManager = useDatabaseManager();
  event.context.databaseManager = databaseManager;

  // Shop Database instance
  event.context.productsDatabase = databaseManager.accessDatabase('products')
  event.context.categoriesDatabase = databaseManager.accessDatabase('categories')
  event.context.subcategoriesDatabase = databaseManager.accessDatabase('subcategories')
  event.context.clientsDatabase = databaseManager.accessDatabase('clients')

  // Continue with the request
  return;
});
