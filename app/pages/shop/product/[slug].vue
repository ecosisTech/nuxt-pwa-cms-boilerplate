<script setup lang="ts">
import { useProductsStore } from '../../../stores/products'
import { useCartStore } from '../../../stores/cart'

const productsStore = useProductsStore()
const cartStore = useCartStore()
const route = useRoute()

const product = computed(() => {
  return productsStore.products.find(product => {
    return product.slug === route.params.slug
  })
})

const image = useAssets(`/uploads/shop/products/${product.value.image}`)

async function addToCart(product) {
  await cartStore.addToCart({
    id: product.value.id,
    name: product.value.name,
    price: product.value.price,
    currency: 'EUR',
    stripePriceId: product.value.stripePriceId,
  })
}
</script>
<template>
  <div class="container mx-auto">
    <div class="flex mt-16 p-4">
      <div class="w-1/2">
        <div>
          <img
              class="rounded-3xl border border-indigo-200 hover:animate-pulse"
              :src="`/uploads/shop/products/${product.image}`"
              :alt="`${product.name}`"
          >
        </div>
      </div>
      <div class="w-1/2 flex flex-col items-center justify-center">
        <div><h2 class="text-5xl text-indigo-700 ">{{ product.name }}</h2></div>
        <div class="my-8 flex flex-col items-center justify-center">
          <button
              class="px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-indigo-200 rounded-lg"
              @click="addToCart(product)"
          >
            Add to Cart {{ product.price }}€
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
