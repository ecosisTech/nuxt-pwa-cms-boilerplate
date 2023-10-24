import { v4 as uuid } from 'uuid'
import { User } from '../../../lib/interfaces/user.interface' // Adjust the import path accordingly

export default defineEventHandler(async (event) => {
  try {
    const databaseManager = event.context.databaseManager
    const { user } = useBody()

    // Generate a unique user ID
    const userId = uuid()

    // Add the ID to the user object
    const newUser: User = { ...user, id: userId }

    // Add the new user to the database
    await databaseManager.addUser(userId, newUser)

    return { status: 'User created successfully', userId }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
