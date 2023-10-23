// Import the Category interface
import { Category } from '../../../lib/interfaces/category.interface'; // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const categoriesDatabase = event.context.categoriesDatabase;
    const userRole = event.context.userRole; // Assuming you've set the user's role in a previous middleware

    if (userRole !== 'admin') {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      });
    }

    const categoryId = getRouterParam(event, 'id');
    const { categoryData: Category } = useBody();

    // Check if the category with the given ID exists
    const categoryExists = await categoriesDatabase.exists(categoryId);
    if (!categoryExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Category not found',
      });
    }

    // Update the category in the database
    await categoriesDatabase.put(categoryId, categoryData);

    return { message: 'Category updated successfully' };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
