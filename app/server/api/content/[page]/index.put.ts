import { useContentDatabase } from '../../../lib/database'

const database = useContentDatabase()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const config = database.get('config')
    await database.put('config', body.data)
    return true
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }
})
