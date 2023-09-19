import { useDatabase } from '../../lib/database'

const database = useDatabase()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const id = new Date()
    await database.put(id.toString(), body.data)

    return body.data
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }
})
