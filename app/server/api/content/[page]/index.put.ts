import { useContentDatabase } from '../../../lib/database'

const database = useContentDatabase()

export default defineEventHandler(async (event) => {
  try {
    const { data } = await readBody(event)
    const params = await getParams(event)
    const config = database.get(params)
    await database.put(params, data)
    return true
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }
})
