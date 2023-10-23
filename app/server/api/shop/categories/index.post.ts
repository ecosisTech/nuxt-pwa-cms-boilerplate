import { v4 as uuid } from 'uuid'
import { Category } from '../../../lib/interfaces/category.interface' // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const categoriesDatabase = event.context.categoriesDatabase
    const userRole = event.context.userRole // Assuming you've set the user's role in a previous middleware

    if (userRole !== 'admin') {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      })
    }

    // Get the category data from the request body
    const { categoryData: Category } = useBody()

    // Generate a unique ID for the category (you can use your own method)
    const categoryId = uuid() // Implement a method to generate unique IDs

    // Add the category to the database
    await categoriesDatabase.put(categoryId, categoryData)

    return { message: 'Category created successfully' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
