import { v4 as uuid } from 'uuid'
import { User } from '../../../lib/interfaces/user.interface' // Adjust the import path accordingly
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const databaseManager = event.context.databaseManager
    const { data } = await readBody(event)

    if (!session) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      })
    }
    // if (userRole !== 'admin') {
    //   throw createError({
    //     statusCode: 403, // Forbidden
    //     statusMessage: 'Permission denied',
    //   })
    // }

    // Generate a unique user ID
    data.id = uuid()

    // Add the new user to the database
    const userExists = await databaseManager.userExists(data.email)
    if (userExists) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'User already exists!',
      })
    }

    // Add new User
    await databaseManager.addUser(data.email, data)

    return { status: 'User created successfully' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
