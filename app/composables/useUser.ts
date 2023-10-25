export const addUser = async (data) => {
  try {
    const { error } = await useFetch('/api/user/', {
      method: 'POST',
      body: {
        data
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const updateUser = async (email, data) => {
  try {
    const { error } = await useFetch('/api/user/' + email, {
      method: 'PUT',
      body: {
        data
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const resetPassword = async (email) => {
  try {
    const { error } = await useFetch('/api/user/' + email + '/passwordreset', {
      method: 'POST'
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getUser = async (email) => {
  try {
    const { data, error } = await useFetch('/api/user/' + email, {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllUsers = async () => {
  try {
    const { data, error } = await useFetch('/api/user/', {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

// export const importUsers = async (data) => {
//   try {
//     return await useFetch('/api/user/import', {
//       method: 'GET',
//       body: data
//     })
//   } catch (error) {
//     throw new Error(error)
//   }
// }

export const deleteUser = async (email) => {
  try {
    const { data, error } =  await useFetch('/api/user/' + email, {
      method: 'DELETE'
    })
  } catch (error) {
    throw new Error(error)
  }
}
