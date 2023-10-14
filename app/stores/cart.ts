export const useCartStore = definePiniaStore('cart', () => {
  const items = ref([])

  const addToCart = (itemPayload) => {
    const existingItem = items.value.find(item => {
      return item.id === itemPayload.id
    })

    if (existingItem) {
      let existingItemIndex = items.value.findIndex(
        item => item.id === existingItem.id
      )

      existingItem.quantity = existingItem.quantity + 1
      existingItem.subTotal = itemPayload.price * existingItem.quantity
      items.value[existingItemIndex] = existingItem
    } else {
      items.value.push({
        id: itemPayload.id,
        name: itemPayload.name,
        price: itemPayload.price,
        currency: itemPayload.currency || 'EUR',
        quantity: 1,
        subTotal: itemPayload.price,
        stripePriceId: itemPayload.stripePriceId,
      })
    }
  }

  const removeFromCart = (itemPayload) => {
    items.value = items.value.filter(item => item !== itemPayload)
  }

  const calcTotal = () => {
    let total = 0
    for (let item of items.value) {
      total = total + item.subTotal
    }
    return total.toFixed(2)
  }

  return {
    items,
    addToCart,
    removeFromCart,
    calcTotal
  }
})
