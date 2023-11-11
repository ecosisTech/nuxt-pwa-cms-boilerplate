<script setup lang="ts">
import { useCategoriesStore } from '../../stores/categories'
import { useProductsStore } from '../../stores/products'

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

const allProducts = computed(() => {
  return productsStore.products
})

const searchQuery = ref('')
const searchResult = computed(() => {
  return filterArrayByKeyword(allProducts.value, searchQuery.value)
})
</script>
<template>
  <section class="w-full bg-base-300">
    <div class="w-full flex flex-col items-center">
      <input type="text" placeholder="Suche" class="input input-bordered input-lg w-full" v-model="searchQuery"/>
      <!-- <ShopSearch class="w-full"/> -->
      <ul class="menu xl:menu-horizontal w-screen bg-base-100 rounded-box mt-2 w-full md:w-[1080px]" v-if="searchQuery">
        <li>
          <a>Produkte</a>
          <ul class="flex flex-wrap w-full md:w-[900px]">
            <li class="w-1/2" v-for="product in searchResult"><NuxtLink :to="`/shop/product/${product.slug}`">
              <img class="w-12 h-12 rounded-md" :src="`/uploads/${(product.images[0]) ? product.images[0] : 'shop/product-placeholder.png'}`"/>
              <h2><!-- <button
    class="px-6 py-4 btn-ghost border-success rounded-xl mt-2"
    @click="buyInstantly(product)"
  >
    Sofort Kaufen {{ formatRealNumber(currentProductsellingPrice * quantity) }}€
  </button> -->
                {{ product.name }}
              </h2>
            </NuxtLink></li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>
