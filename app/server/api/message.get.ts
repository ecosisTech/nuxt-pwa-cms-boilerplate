import { useDatabase } from '../../lib/database'

const database = useDatabase()

export default defineEventHandler(async (event) => {
  try {
    const data = await database.all()
    console.log(data);

    return data
  } catch (error) {
    setResponseStatus(error, 500)
  }
})
