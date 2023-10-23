import { Product } from '../../../lib/interfaces/product.interface' // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const productsDatabase = event.context.productsDatabase
    const productId = getRouterParam(event, 'id')

    // Check if the product with the given ID exists
    const productExists = await productsDatabase.exists(productId)
    if (!productExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'Product not found',
      })
    }

    // Check if the product with the given ID exists
    const product: Product = await productsDatabase.get(productId)

    return { product }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
