// Import the Category interface
import { Subsubcategory } from '../../../lib/interfaces/subcategory.interface'; // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const subcategoriesDatabase = event.context.subcategoriesDatabase;
    const subcategoryData = getRouterParam(event, 'id');

    // Check if the subcategory with the given ID exists
    const subcategoryExists = await subcategoriesDatabase.exists(subcategoryData);
    if (!subcategoryExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Category not found',
      });
    }

    // Retrieve the subcategory data from the database
    const subcategory: Subsubcategory = await subcategoriesDatabase.get(subcategoryData);

    return { subcategory };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
