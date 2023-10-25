import { User } from '../../../lib/interfaces/user.interface' // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const databaseManager = event.context.databaseManager
    const email = getRouterParam(event, 'email')

    const userExists = await databaseManager.userExists(email)
    if (!userExists) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'User does not exist!',
      })
    }

    // Get User
    const user: User = await databaseManager.getUser(email)

    // Hide User Password Data
    user.password = undefined

    return user
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
