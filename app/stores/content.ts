export const useContentStore = definePiniaStore('content', () => {
    const pages = ref([])

    const fetchPages = async (url) => {
      try {
        const { data } = await useFetch('/api/content/fetch')
        return products.value = data.value
      } catch (error) {
        throw new Error(error)
      }
    }


    return {
    }
})
