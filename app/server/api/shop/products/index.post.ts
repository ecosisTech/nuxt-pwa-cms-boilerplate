import { v4 as uuid } from 'uuid';
import { Product } from '../../../lib/interfaces/product.interface' // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const productsDatabase = event.context.productsDatabase
    const userRole = event.context.userRole // Assuming you've set the user's role in a previous middleware

    if (userRole !== 'admin') {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      })
    }

    // Get the product data from the request body
    const { productData: Product } = useBody()

    // Generate a unique ID for the product (you can use your own method)
    const productId = uuid() // Implement a method to generate unique IDs

    // Add the product to the database
    await productsDatabase.put(productId, productData)

    return { message: 'Product created successfully' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
