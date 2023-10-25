import { getServerSession } from '#auth'

export default eventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const databaseManager = event.context.databaseManager

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
    //   });
    // }

    const email = getRouterParam(event, 'email')
    const { data } = await readBody(event)

    const userExists = await databaseManager.userExists(email)
    if (!userExists) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'User does not exist!',
      })
    }

    // Add user
    return await databaseManager.updateUser(email, data)
  } catch (error) {
    return createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
