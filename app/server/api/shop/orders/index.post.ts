import { v4 as uuid } from 'uuid';
import { Order } from '../../../lib/interfaces/order.interface'; // Replace with the actual path to your interface file

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

    // Get the order data from the request body
    const { orderData: Order } = useBody();

    // Generate a unique ID for the order (you can use your own method)
    const orderId = uuid(); // Implement a method to generate unique IDs

    // Add the order to the database
    await ordersDatabase.put(orderId, orderData);

    return { message: 'Order created successfully' };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
