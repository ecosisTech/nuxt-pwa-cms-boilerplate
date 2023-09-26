export const useCartStore = definePiniaStore('cart', () => {
    const items = []

    const addToCart = (itemPayload) => {
      const existingItem = items.find(item => {
        return item.productId === itemPayload.id
      })

      if (existingItem) {
        let existingItemIndex = items.findIndex(
          item => item.productId === existingItem.productId
        )

        existingItem.quantity = existingItem.quantity + 1
        existingItem.subTotal = itemPayload.price * existingItem.quantity
        items[existingItemIndex] = existingItem
      } else {
        items.push({
          productId: itemPayload.id,
          productName: itemPayload.name,
          price: itemPayload.price,
          currency: itemPayload.currency || 'EUR',
          quantity: 1,
          subTotal: itemPayload.price,
          stripePriceId: itemPayload.stripePriceId,
        })
      }
    }

    const calcSubtotal = () => {
      const subtotal = 0
      for (let item of items) {
        subtotal + item.price
      }
      return subtotal
    }

    return {
      items,
      addToCart,
      calcSubtotal
    }
})
