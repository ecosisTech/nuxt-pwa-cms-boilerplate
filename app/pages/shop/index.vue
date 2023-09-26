<script setup lang="ts">
import { useProductsStore } from '../../stores/products'

const productsStore = useProductsStore()

const products = computed(() => {
  return productsStore.products
})

</script>

<template>
  <div class="pt-8">
    <div class="w-full flex justify-end h-64 p-12 bg-[url(/uploads/shop/products/banner-placeholder.webp)]">
      <div class="flex flex-col text-right">
        <h1 class="text-blue-400 text-2xl">Welcome!</h1>
        <p class="mt-4"><strong>New Hot Products</strong>, explore and shop!</p>
      </div>
    </div>
    <div class="container mx-auto flex justify-around mt-20" v-if="products">
      <div v-for="product in products" :key="product.id">
      <ShopProductsPreview :product="product"/>
    </div>
  </div>
</div>
</template>

<style scoped>
</style>
