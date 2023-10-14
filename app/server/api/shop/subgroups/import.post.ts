import { useShopDatabase } from '../../../../lib/database'
// import { generateID } from '../../../../utils/generateID'

const shopDatabase = useShopDatabase()

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    // const productID = generateID()
    for (let product of data) {
      console.log(product['product-id']);

      await shopDatabase.put(product['product-id'], product);
    }
    setResponseStatus(event, 202)
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }
})
