export const useClientsStore = definePiniaStore('clients', () => {
    const clients = ref([])

    const fetchClients = async () => {
      try {
        const { data } = await useFetch('/api/shop/clients/')
        return clients.value = data.value
        // const { data } = await useFetch('/api/shop/clients/fetch')
        return clients.value = data.value
        // return clients.value = demoClient
      } catch (error) {
        throw new Error(error)
      }
    }

    const addClient = async (client) => {
      try {
        return clients.value = await useFetch('/api/shop/clients/import', {
          method: 'POST',
          body: client
        })
        clients.value.push(client)
      } catch (error) {
        throw new Error(error)
      }
    }

    const updateClient = async (client) => {
      try {
        await useFetch('/api/shop/clients/update', {
          method: 'PUT',
          body: client
        })
        const newClientList = clients.value.filter(c => c !== client)
        newClientList.push(client)
        return clients.value = newClientList
      } catch (error) {
        throw new Error(error)
      }
    }

    const removeClient = async (client) => {
      try {
        clients.value = clients.value.filter(c => c !== client)

        await useFetch('/api/shop/clients', {
          method: 'DELETE',
          body: client
        })
      } catch (error) {
        throw new Error(error)
      }
    }

    return {
      clients,
      fetchClients,
      addClient,
      updateClient,
      removeClient
    }
})
