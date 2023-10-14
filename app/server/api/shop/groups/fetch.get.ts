import { useShopDatabase } from '../../../../lib/database'

const shopDatabase = useShopDatabase()

export default defineEventHandler(async (event) => {
  try {
    return await shopDatabase.all()
    // return await require('../../../../../standardartikel.db.json')
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }
})
