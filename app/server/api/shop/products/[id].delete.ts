export default defineEventHandler(async (event) => {
  try {
    const productsDatabase = event.context.productsDatabase;
    const userRole = event.context.userRole; // Assuming you've set the user's role in a previous middleware

    if (userRole !== 'admin') {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      });
    }

    const productId = getRouterParam(event, 'id');

    // Check if the product with the given ID exists
    const productExists = await productsDatabase.exists(productId);
    if (!productExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Product not found',
      });
    }

    // Delete the product from the database
    await productsDatabase.del(productId);

    return { message: 'Product deleted successfully' };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
