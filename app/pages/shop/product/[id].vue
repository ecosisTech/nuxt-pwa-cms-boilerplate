<script setup lang="ts">
import { useUserStore } from '../../../stores/user'
import { useProductsStore } from '../../../stores/products'
import { useCartStore } from '../../../stores/cart'

const productsStore = useProductsStore()
const userStore = useUserStore()
const cartStore = useCartStore()
const route = useRoute()
const router = useRouter()

const product = computed(() => {
  return productsStore.products.find(p => p['product-id'].toString() === route.params.id)
})

async function addToCart(product) {
  await cartStore.addToCart({
    id: product['product-id'],
    name: product['name'],
    price: product['selling-price'],
    currency: 'EUR',
    // stripePriceId: product.stripePriceId,
  })
}
</script>
<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap mt-16 p-4">
      <div class="w-full md:w-1/4 m-8">
        <img
          class="rounded-3xl border border-indigo-200 hover:animate-pulse h-full w-full"
          :src="`/uploads/shop/products/${product.image || 'product-placeholder.png'}`"
          :alt="`${product.name}`"
        >
      </div>
      <div class="w-full md:w-2/4 m-8 flex flex-col items-start justify-center">
        <div>
          <h2 class="text-5xl text-primary ">{{ product.name }}</h2>
          <div class=" flex">
            <!-- <h3>Brand</h3> -->
            <h3 class="text-4xl font-bold ">{{ product.brand }}</h3>
          </div>
          <div class="flex flex-col p-2">
            <div class="flex flex-col">
              <p>Produkt Farbe: {{ product.color }}</p>
            </div>
            <div class="flex">
              <p><span>{{ product['property-name'] }}: </span>{{ product['property-value'] }}</p>
            </div>
          </div>
        </div>
        <div class="italic">
          <p>Quantity: <span>{{ product.quantity }}</span></p>
        </div>
        <div class="my-8 flex flex-col items-start justify-center">
          <span class="text-gray-500 italic text-left">MvSt incl: {{ product.tax }}</span>
          <button
              class="px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-indigo-200 rounded-lg"
              @click="addToCart(product)"
          >
            Add to Cart {{ product['selling-price'].toFixed(2) }}€
          </button>

          <button class="btn" v-if="userStore.isAdmin" @click="router.push(`/admin/shop/edit/${route.params.id}`)">Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>
