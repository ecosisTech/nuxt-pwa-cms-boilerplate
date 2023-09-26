import { useShopDatabase } from '../../lib/database'

const shopDatabase = useShopDatabase()

export default defineEventHandler(async (event) => {
  try {
    return await shopDatabase.all()
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }
})
