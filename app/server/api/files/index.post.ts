import { v4 as uuid } from 'uuid';
import { writeFile, mkdir, stat } from 'fs/promises';
import { File } from '../../../lib/interfaces/file.interface' // Replace with the actual path to your interface file

export default defineEventHandler(async (event) => {
  try {
    const filesDatabase = event.context.filesDatabase
    const userRole = event.context.userRole // Assuming you've set the user's role in a previous middleware

    if (userRole !== 'admin') {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      })
    }

    const { path } = getQuery(event)

    if (!stat(`./uploads/${path}`)) {
      console.log(`./uploads/${path}`);

      await mkdir(path)
    }

    if (!files || files.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Image Not Found',
      })
    }

    for (let file of files) {
      const filename = file.filename
      //   const mimetype = file.type
      const data = file.data
      // const filePath = `./public/${path}/${filename}`
      const filePath = `./uploads/${filename}`
      await writeFile(filePath, data)
    }

    // Get the product data from the request body
    const { fileData: File } = useBody()

    // Generate a unique ID for the product (you can use your own method)
    const fileID = uuid() // Implement a method to generate unique IDs

    // Add the product to the database
    await filesDatabase.put(fileID, fileData)

    return { message: 'Product created successfully' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
