export const useCategoriesStore = definePiniaStore('categories', () => {
    const categories = ref([])

    const fetchCategories = async () => {
      try {
        // const { data } = await useFetch('/api/shop/categories/fetch')
        // return categories.value = data.value
        return categories.value = demoCategories
      } catch (error) {
        throw new Error(error)
      }
    }

    const addCategories = async (category) => {
      try {
        await useFetch('/api/shop/categories/import', {
          method: 'POST',
          body: category
        })
        categories.value.push(category)
      } catch (error) {
        throw new Error(error)
      }
    }

    const updateCategories = async (category) => {
      try {
        await useFetch('/api/shop/categories/update', {
          method: 'PUT',
          body: category
        })
        const newCategoriesList = categories.value.filter(c =>cp !== category)
        newCategoriesList.push(category)
        return categories.value = newCategoriesList
      } catch (error) {
        throw new Error(error)
      }
    }

    const removeCategories = async (category) => {
      try {
        categories.value = categories.value.filter(c => c !== category)

        await useFetch('/api/shop/categories', {
          method: 'DELETE',
          body: category
        })
      } catch (error) {
        throw new Error(error)
      }
    }

    const addSubcategories = async (categoryId, subcategory) => {
      try {
        await useFetch('/api/shop/categories/import', {
          method: 'POST',
          body: category
        })
        categories.value.push(subcategory)
      } catch (error) {
        throw new Error(error)
      }
    }

    const updateSubcategories = async (categoryId, subcategory) => {
      try {
        await useFetch('/api/shop/categories/', {
          method: 'PUT',
          body: subcategory
        })
        const newSubcategoriesList = categories.value.filter(c => cp !== subcategory)
        newSubcategoriesList.push(subcategory)
        return categories.value = newSubcategoriesList
      } catch (error) {
        throw new Error(error)
      }
    }

    const removeSubcategories = async (categoryId, subcategory) => {
      try {
        categories.value = categories.value.filter(c => c !== subcategory)

        await useFetch('/api/shop/categories', {
          method: 'DELETE',
          body: subcategory
        })
      } catch (error) {
        throw new Error(error)
      }
    }

    return {
      categories,
      fetchCategories,
      addCategories,
      updateCategories,
      removeCategories,
      addSubcategories,
      updateSubcategories,
      removeSubcategories
    }
})
