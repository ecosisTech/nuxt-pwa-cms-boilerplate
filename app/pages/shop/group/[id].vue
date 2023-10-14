<script setup lang="ts">
import { useProductsStore } from '../../../stores/products'

const route = useRoute()

const productsStore = useProductsStore()

const groupProducts = computed(() => {
  return productsStore.products.filter(p => p['group-id'] === Number(route.params.id))
})

// const featuredProducts = computed(() => {
//   return productsStore.products.filter(p => p.featured === true)
//   // return productsStore.products
//
// })

const bannerImage = computed(() => {
  // return
})
</script>

<template>
  <div class="pt-8">
    <div class="w-full flex justify-end h-64 p-12 bg-[url(/uploads/shop/products/banner-placeholder.webp)]">
      <div class="flex flex-col text-right">
        <h1 class="text-blue-400 text-2xl">Warengruppe: </h1>
        <p class="mt-4"><strong>New Hot Products</strong>, explore and shop!</p>
      </div>
    </div>
    <!-- <div class="container mx-auto flex flex-col items-center justify-around mt-20" v-if="groupProducts">
      <div class="">
        <h1>Featured</h1>
      </div>
      <div class="flex flex-wrap justify-around">
        <div v-for="product in groupProducts" :key="product['product-id']">
          <ShopProductsFeatured :product="featuredProducts"/>
        </div>
      </div>
    </div> -->
    <div class="container mx-auto flex flex-col items-center justify-around mt-20" v-if="groupProducts">
      <div class="">
        <h2>Products</h2>
      </div>
      <div class="flex flex-wrap justify-around">
        <div v-for="product in groupProducts" :key="product['product-id']">
          <ShopProductsPreview :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
