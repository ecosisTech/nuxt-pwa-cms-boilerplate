import { v4 as uuid } from 'uuid';

export default defineEventHandler(async (event) => {
  try {
    const subcategoriesDatabase = event.context.subcategoriesDatabase

    return await subcategoriesDatabase.all()
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
