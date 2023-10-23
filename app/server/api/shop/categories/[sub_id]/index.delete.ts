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

    // Check if the category with the given ID exists
    const categoryExists = await categoriesDatabase.exists(categoryId);
    if (!categoryExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Category not found',
      });
    }

    // Delete the category from the database
    await categoriesDatabase.del(categoryId);

    return { message: 'Category deleted successfully' };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
