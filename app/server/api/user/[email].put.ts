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

    const email = getRouterParam(event, 'email')
    const { data } = await readBody(event)

    const userExists = await databaseManager.userExists(email)
    if (!userExists) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'User does not exist!',
      })
    }
    // TODO
    // // Check if the user is authorized to edit the data
    // if (session.email !== email && session.userRole !== 'admin') {
    //   return createError({ statusCode: 403, statusMessage: 'Forbidden' })
    // }
    await databaseManager.updateUser(email, data)
  } catch (error) {
    return createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
