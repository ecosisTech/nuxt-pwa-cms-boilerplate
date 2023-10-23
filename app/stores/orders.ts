export const useOrdersStore = definePiniaStore('orders', () => {
    const orders = ref([])

    const fetchOrders = async () => {
      try {
        const { data } = await useFetch('/api/shop/orders/')
        return orders.value = data.value
      } catch (error) {
        throw new Error(error)
      }
    }

    const addOrder = async (order) => {
      try {
        await useFetch('/api/shop/orders/', {
          method: 'POST',
          body: order
        })
        orders.value.push(order)
      } catch (error) {
        throw new Error(error)
      }
    }

    const updateOrder = async (order) => {
      try {
        await useFetch(`/api/shop/orders/${order.id}`, {
          method: 'PUT',
          body: order
        })
        const newOrderList = orders.value.filter(o => o !== order)
        newOrderList.push(order)
        return orders.value = newOrderList
      } catch (error) {
        throw new Error(error)
      }
    }

    const removeOrder = async (order) => {
      try {
        await useFetch(`/api/shop/orders/${order.id}`, {
          method: 'DELETE'
        })
        orders.value = orders.value.filter(o => o !== order)
      } catch (error) {
        throw new Error(error)
      }
    }

    return {
      orders,
      fetchOrders,
      addOrder,
      updateOrder,
      removeOrder
    }
})
