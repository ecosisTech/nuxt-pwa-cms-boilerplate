export const useCartStore = definePiniaStore('cart', () => {
    const items = []

    const addToCart = (itemPayload) => {
      const existingItem = this.items.find(item => {
        return item.productId === itemPayload.id
      })

      if (existingItem) {
        let existingItemIndex = this.items.findIndex(
          item => item.productId === existingItem.productId
        )

        existingItem.quantity = existingItem.quantity + 1
        existingItem.subTotal = itemPayload.price * existingItem.quantity
        this.items[existingItemIndex] = existingItem
      } else {
        this.items.push({
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

    return {
      items
    }
})
