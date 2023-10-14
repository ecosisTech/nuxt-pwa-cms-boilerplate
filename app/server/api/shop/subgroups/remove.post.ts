import { useShopDatabase } from '../../../../lib/database'
// import { generateID } from '../../../../utils/generateID'

const shopDatabase = useShopDatabase()

export default defineEventHandler(async (event) => {
  try {
    const product = await readBody(event)
    console.log(product);

    const productExists = await shopDatabase.exists(product['product-id'])
    if (productExists) {
      await shopDatabase.del(product['product-id'])
      setResponseStatus(event, 202)
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }
})
