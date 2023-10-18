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

    const getPage = (path) => {
      try {
        const { data } = await useFetch(`/api/content/${path}`)
      } catch (error) {
        throw new Error(error)
      }
    }

    const savePage = async (path) => {
    try {

    } catch (error) {

    }

    return {
      pages,
      fetchPages,
      getPage,
      savePage
    }
})
