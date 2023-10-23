// Import the Subcategory interface
import { Subcategory } from '../../../lib/interfaces/subcategory.interface'; // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const subcategoriesDatabase = event.context.subcategoriesDatabase;
    const userRole = event.context.userRole; // Assuming you've set the user's role in a previous middleware

    if (userRole !== 'admin') {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      });
    }

    const subcategoryId = getRouterParam(event, 'id');
    const { subcategoryData: Subcategory } = useBody();

    // Check if the category with the given ID exists
    const categoryExists = await subcategoriesDatabase.exists(subcategoryId);
    if (!categoryExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Subcategory not found',
      });
    }

    // Update the category in the database
    await subcategoriesDatabase.put(subcategoryId, subcategoryData);

    return { message: 'Subcategory updated successfully' };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
