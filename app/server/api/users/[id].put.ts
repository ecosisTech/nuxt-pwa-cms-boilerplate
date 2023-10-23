import { getServerSession } from '#auth'

export default eventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const databaseManager = event.context.databaseManager

    if (!session) {
      return createError({ statusCode: 401, statusMessage: 'Unauthorized' })
    }

    const userId = getRouterParam(event, 'id')
    const { user } = useBody()

    // Check if the user is authorized to edit the data
    if (session.userId !== userId && session.userRole !== 'admin') {
      return createError({ statusCode: 403, statusMessage: 'Forbidden' })
    }
    await databaseManager.updateUser(userId, user)
  } catch (error) {
    return createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
