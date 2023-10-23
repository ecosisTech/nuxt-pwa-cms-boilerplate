// Import the Category interface
import { Category } from '../../../lib/interfaces/category.interface'; // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const categoriesDatabase = event.context.categoriesDatabase;
    const categoryId = getRouterParam(event, 'id');

    // Check if the category with the given ID exists
    const categoryExists = await categoriesDatabase.exists(categoryId);
    if (!categoryExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Category not found',
      });
    }

    // Retrieve the category data from the database
    const category: Category = await categoriesDatabase.get(categoryId);

    return { category };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
