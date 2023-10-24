export const addUsers = async (data) => {
  try {
    return await useFetch('/api/user/', {
      method: 'POST',
      body: data
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const updateUsers = async (id, data) => {
  try {
    return await useFetch('/api/user/' + id, {
      method: 'PUT',
      body: data
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getUsers = async (id) => {
  try {
    return await useFetch('/api/user/' + id, {
      method: 'GET'
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllUserss = async () => {
  try {
    return await useFetch('/api/user/'', {
      method: 'GET'
    })
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

export const deleteUsers = async (id) => {
  try {
    return await useFetch('/api/user/' + id, {
      method: 'DELETE'
    })
  } catch (error) {
    throw new Error(error)
  }
}
