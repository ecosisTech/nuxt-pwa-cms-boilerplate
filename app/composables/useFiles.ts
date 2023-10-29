export const addFile = async (data) => {
  try {
    return await useFetch('/api/shop/files/', {
      method: 'POST',
      body: data
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const updateFile = async (id, data) => {
  try {
    return await useFetch('/api/shop/files/' + id, {
      method: 'PUT',
      body: data
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getFile = async (id) => {
  try {
    const { data } = await useFetch('/api/shop/files/' + id, {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllFiles = async () => {
  try {
    const { data } = await useFetch('/api/shop/files/', {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteFile = async (id) => {
  try {
    return await useFetch('/api/shop/files/' + id, {
      method: 'DELETE'
    })
  } catch (error) {
    throw new Error(error)
  }
}
