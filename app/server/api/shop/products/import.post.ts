import { v4 as uuid } from 'uuid'
import { Product } from '../../../lib/interfaces/product.interface'

export default defineEventHandler(async (event) => {
  try {
    const productsDatabase = event.context.productsDatabase
    const userRole = event.context.userRole

    // Check if the user has the required role (e.g., admin)
    if (userRole !== 'admin') {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      })
    }

    const { data } = useBody() // Assuming it's an array of products

    // Import the array of products
    for (let product: Product of data) {
      // Generate a unique user ID
      product.id = uuid()

      await productsDatabase.put(product.slug, product)
    }

    setResponseStatus(event, 202)
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
