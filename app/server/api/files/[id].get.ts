import { File } from '../../../lib/interfaces/file.interface' // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const filesDatabase = event.context.filesDatabase
    const fileId = getRouterParam(event, 'id')

    // Check if the file with the given ID exists
    const fileExists = await filesDatabase.exists(fileId)
    if (!fileExists) {
      throw createError({
        statusCode: 404, // Not Found
        statusMessage: 'File not found',
      })
    }

    // Check if the file with the given ID exists
    const file: File = await filesDatabase.get(fileId)

    return { file }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
