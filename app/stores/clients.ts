export const useClientsStore = definePiniaStore('clients', () => {
  const clients = ref([])

  const fetchClients = async () => {
    const { data } = await useAsyncData(
      "new-customers",
      () => $fetch("https://randomuser.me/api/?results=20"),
      {
        default: () => [],
        transform: (data: any) => data.results,
      }
    )
    clients.value = data.value
  }



  return { clients, fetchClients }
})
