export const useProductsStore = definePiniaStore(
  'products-store',
  {
    state : () => (
      {
        products: [],
      }
    ),
    getters: {},
    actions: {},
  }
)
