export const addClient = async (data) => {
  try {
    return await useFetch('/api/shop/clients/', {
      method: 'POST',
      body: data
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const updateClient = async (id, data) => {
  try {
    return await useFetch('/api/shop/clients/' + id, {
      method: 'PUT',
      body: data
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getClient = async (id) => {
  try {
    return await useFetch('/api/shop/clients/' + id, {
      method: 'GET'
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllClients = async () => {
  try {
    return await useFetch('/api/shop/clients/', {
      method: 'GET'
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteClient = async (id) => {
  try {
    return await useFetch('/api/shop/clients/' + id, {
      method: 'DELETE'
    })
  } catch (error) {
    throw new Error(error)
  }
}
