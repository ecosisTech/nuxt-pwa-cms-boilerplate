import { useShopDatabase } from '../../lib/database'
import { generateID } from '../utils/generateID'

const shopDatabase = useShopDatabase()

export default defineEventHandler(async (event) => {
  try {
    const { productInfo } = await readBody(event)
    const productID = generateID()

    await shopDatabase.put(productID, productInfo);

    setResponseStatus(event, 202)
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }
})
