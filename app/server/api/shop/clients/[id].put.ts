// Import the Client interface
import { Client } from '../../../lib/interfaces/client.interface' // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const clientsDatabase = event.context.clientsDatabase;
    const userRole = event.context.userRole; // Assuming you've set the user's role in a previous middleware

    if (userRole !== 'admin') {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      });
    }

    const clientId = getRouterParam(event, 'id');
    const { clientData: Client } = useBody();

    // Check if the product with the given ID exists
    const clientExists = await clientsDatabase.exists(clientId);
    if (!clientExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Client not found',
      });
    }

    // Update the product in the database
    await clientsDatabase.put(clientId, clientData);

    return { message: 'Client updated successfully' };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
