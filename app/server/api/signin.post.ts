import bcrypt from 'bcrypt';
import { useUserDatabase } from '../../lib/database'

const userDatabase = useUserDatabase()

export default defineEventHandler(async (event) => {
  try {
    const { email, password } = await readBody(event)

    const userExists = await userDatabase.exists(email);

    if (!userExists) {
      throw createError({
        statusCode: 500,
        statusMessage: 'User does not exist!',
      })
    };

    const user = userDatabase.get(email)

    const correctPassword = await bcrypt.compare(password, user.password);

    if (!correctPassword) {
      throw createError({
        statusCode: 403,
        statusMessage: 'E-Mail or Password wrong!',
      })
    }

    setResponseStatus(event, 202)
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }
})
