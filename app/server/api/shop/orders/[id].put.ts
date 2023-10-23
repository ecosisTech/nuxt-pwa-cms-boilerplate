// Import the Order interface
import { Order } from '../../../lib/interfaces/order.interface' // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const ordersDatabase = event.context.ordersDatabase;
    const userRole = event.context.userRole; // Assuming you've set the user's role in a previous middleware

    if (userRole !== 'admin') {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      });
    }

    const orderId = getRouterParam(event, 'id');
    const { orderData: Order } = useBody();

    // Check if the product with the given ID exists
    const orderExists = await ordersDatabase.exists(orderId);
    if (!orderExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Order not found',
      });
    }

    // Update the product in the database
    await ordersDatabase.put(orderId, orderData);

    return { message: 'Order updated successfully' };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
