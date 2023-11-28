import { v4 as uuid } from 'uuid'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const databaseManager = event.context.databaseManager
    const notesDatabase = event.context.notesDatabase
    // const userRole = event.context.userRole // Assuming you've set the user's role in a previous middleware

    // if (userRole !== 'admin') {
    //   throw createError({
    //     statusCode: 403, // Forbidden
    //     statusMessage: 'Permission denied',
    //   })
    // }
    if (!session) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      })
    }

    // Get User
    const user = await databaseManager.getUserByMail(session.user.email)

    // Check if the product with the given ID exists
    const notesExists = await notesDatabase.exists(user.id)

    if (!notesExists) {
      const id = uuid()
      const created = new Date().toISOString()
      const updated = created
      const pages = [{
        name: '🗃 Home',
        slug: '',
        blocks:[{
          id: uuid(),
          type: 'TEXT',
          details: {
            value: 'Add some notes!'
          },
        }],
      }]
      await notesDatabase.put(user.id, { id, created, updated, pages })
    }
    const note = await notesDatabase.get(user.id)
    return note.pages.find(n => n.slug === '')
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
