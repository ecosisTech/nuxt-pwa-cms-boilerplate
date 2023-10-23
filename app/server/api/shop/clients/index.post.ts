import { v4 as uuid } from 'uuid';
import { Client } from '../../../lib/interfaces/client.interface'; // Replace with the actual path to your interface file

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

    // Get the client data from the request body
    const { clientData: Client } = useBody();

    // Generate a unique ID for the client (you can use your own method)
    const clientId = uuid(); // Implement a method to generate unique IDs

    // Add the client to the database
    await clientsDatabase.put(clientId, clientData);

    return { message: 'Client created successfully' };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
