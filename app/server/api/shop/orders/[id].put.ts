// Import the Order interface
import { Order } from '../../../lib/interfaces/order.interface' // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const ordersDatabase = event.context.ordersDatabase;

    const id = getRouterParam(event, 'id');
    const { data } = await readBody();

    // Check if the product with the given ID exists
    const orderExists = await ordersDatabase.exists(id);
    if (!orderExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Order not found',
      });
    }

    // Update the product in the database
    await ordersDatabase.put(id, data);
    return await ordersDatabase.get(id)
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
