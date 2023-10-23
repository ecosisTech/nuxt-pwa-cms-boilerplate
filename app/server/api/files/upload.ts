import { writeFile, mkdir, stat } from 'fs/promises';
import { useFilesDatabase } from '../../../lib/database'

const filesDatabase = useFilesDatabase()

const returnFileNames = (files) => {
  for (let file of files) {
    if (file.filename) {
      return file.filename
    }
  }
}

// https://reffect.co.jp/en/nuxt/nuxt3-file-upload/
export default defineEventHandler(async (event) => {
  try {
    const files = await readMultipartFormData(event)
    // const { path } = getQuery(event)
    const path = 'test'
    console.log(files)

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

    // await filesDatabase.put(path, {
    //   path,
    //   files: returnFileNames(files)
    // })

    return {
      message: 'success',
    }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }
})
