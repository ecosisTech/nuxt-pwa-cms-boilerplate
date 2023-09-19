import { useDatabase } from '../../lib/database'

const database = useDatabase()

export default defineEventHandler(async (event) => {
  try {
    return await database.all()
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }
})
