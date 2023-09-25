export const useProductsStore = definePiniaStore('products', () => {
    const products = [
      {
        "id": 1,
        "name": "Hey Sunglasses!",
        "price": 10.99,
        "image": "sunglasses.jpg",
        "slug": "hey-sunglasses",
        "stripePriceId": "price_xxxxxxxxxxxxxxxxxxxx1"
      },
      {
        "id": 2,
        "name": "Fruity Shoes",
        "price": 99.01,
        "image": "shoes.jpg",
        "slug": "fruity-shoes",
        "stripePriceId": "price_xxxxxxxxxxxxxxxxxxxx2"
      }
    ]

    const fetchProducts = () => {

    }

    return {
      products
    }
})
