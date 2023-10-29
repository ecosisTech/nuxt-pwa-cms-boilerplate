// import {
//   existsSync,
//   mkdirSync,
//
// } from 'fs';
import fs from 'fs';
import { writeFile, mkdir, access } from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event)
    const filesDatabase = event.context.filesDatabase
    const databaseManager = event.context.databaseManager
    // const userRole = event.context.userRole // Assuming you've set the user's role in a previous middleware

    if (!session) {
      throw createError({
        statusCode: 403, // Forbidden
        statusMessage: 'Permission denied',
      })
    }
    // if (userRole !== 'admin') {
    //   throw createError({
    //     statusCode: 403, // Forbidden
    //     statusMessage: 'Permission denied',
    //   });
    // }

    // const { path } = await getQuery(event)

    const files = await readMultipartFormData(event);

    if (!files || files.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Image Not Found',
      })
    }

    for (let file of files) {
      let filename = file.filename
      const path = `app/public/uploads/`
      const filePath = path + filename

      if (fs.existsSync(path)) {
        fs.writeFileSync(filePath, file.data);
      } else {
        fs.mkdirSync(path, { recursive: true });
        fs.writeFileSync(filePath, file.data);
      }
    }

    // // Get the product data from the request body
    // const { data } = await readBody()
    //
    // // Generate a unique ID for the product (you can use your own method)
    // const fileID = uuid() // Implement a method to generate unique IDs
    //
    // // Add the product to the database
    // await filesDatabase.put(fileID, fileData)

    return { message: 'Product created successfully' }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
