export const useProductsStore = definePiniaStore('products', () => {
    const groups = ref([])
    const products = ref([])

    const fetchGroups = async () => {
      try {
        for (let product of products.value) {
          const groupExists = groups.value.find(g => g.id === product['group-id'])
          if (groupExists) {
            groupExists.products.push(product['product-id'])
          } else {
            groups.value.push({
              id: product['group-id'],
              name: product['group-name'],
              products: [ product['product-id'] ]
            })
          }
        }
        return groups.value
      } catch (error) {
        throw new Error(error)
      }
    }

    const fetchProducts = async () => {
      try {
        const { data } = await useFetch('/api/shop/products/fetch')
        return products.value = data.value
      } catch (error) {
        throw new Error(error)
      }
    }

    const addProduct = async (product) => {
      try {
        products.value.push(product)
        return products.value = await useFetch('/api/shop/products/import', {
          method: 'POST',
          body: data
        })
      } catch (error) {
        throw new Error(error)
      }
    }

    const updateProduct = async (product) => {
      try {
        await useFetch('/api/shop/products/update', {
          method: 'POST',
          body: product
        })
        const newProductList = products.value.filter(p => p !== product)
        newProductList.push(product)
        return products.value = newProductList
      } catch (error) {
        throw new Error(error)
      }
    }

    const removeProduct = async (product) => {
      try {
        products.value = products.value.filter(p => p !== product)
        console.log(product);

        await useFetch('/api/shop/products/remove', {
          method: 'POST',
          body: product
        })
      } catch (error) {
        throw new Error(error)
      }
    }

    const importJSON = async (data) => {
      try {
        return products.value = await useFetch('/api/shop/products/import', {
          method: 'POST',
          body: data
        })
      } catch (error) {
        throw new Error(error)
      }
    }

    return {
      groups,
      products,
      fetchProducts,
      fetchGroups,
      addProduct,
      updateProduct,
      removeProduct,
      importJSON
    }
})
