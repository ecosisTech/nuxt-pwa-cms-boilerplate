import bcrypt from 'bcrypt';
import { useUserDatabase } from '../../lib/database'

const userDatabase = useUserDatabase()

export default defineEventHandler(async (event) => {
  try {
    const { email, password } = await readBody(event)

    const userExists = await userDatabase.exists(email);

    if (userExists) {
      throw createError({
        statusCode: 403,
        statusMessage: 'User already exists!',
      })
    };

    const hash = await bcrypt.hash(password, 10);
    const user = {
      email,
      password: hash
    };
    await userDatabase.put(email, user);

    setResponseStatus(event, 202)
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }
})
