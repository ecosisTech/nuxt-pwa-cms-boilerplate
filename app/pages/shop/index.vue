<script setup lang="ts">
import { useProductsStore } from '../../stores/products'

const route = useRoute()

const productsStore = useProductsStore()

const allProducts = computed(() => {
  return productsStore.products
})

const featuredProducts = computed(() => {
  return productsStore.products.filter(p => {
    if (p.featured === true) {
      return p
    }
  })
  // return productsStore.products
})

const groups = computed(() => {
  return productsStore.groups
})

// const bannerImage = computed(() => {
//   // return
// })
</script>

<template>
  <div class="">
    <div class="w-full flex justify-end h-screen p-12 bg-[url(/uploads/shop/banner.webp)] bg-cover bg-fixed bg-center bg-no-repeat">
      <div class="flex flex-col justify-start items-center text-center w-full mt-24">
        <img class="mt-24" src="/logo.png">
        <NuxtLink class="btn rounded-xl mt-8" :to="{ path: '/shop', hash: '#shop' }">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          Los geht's!
        </NuxtLink>
      </div>
    </div>
    <div class="custom-shape-divider-bottom-1697729642">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="fill-base-200"></path>
      </svg>
    </div>
    <div class="flex flex-col items-center justify-around pt-16" v-if="groups" id="shop">
      <div class="">
        <h2 class="text-2xl pb-4">Top Produkte</h2>
      </div>
      <div class="flex flex-wrap justify-around">
        <div v-for="product in featuredProducts" :key="product['product-id']" class="flex-1">
          <ShopProductsFeatured :product="product"/>
        </div>
      </div>
    </div>
    <div class="bg-base-300 flex flex-col items-center justify-around pt-24 pb-12" v-if="groups" id="shop">
      <div class="">
        <h2 class="text-2xl pb-4">Warengruppen</h2>
      </div>
      <div class="flex flex-wrap justify-around">
        <div v-for="group in groups" :key="group.id" class="flex-1">
          <ShopProductsGroup :group="group"/>
        </div>
      </div>
    </div>
    <div class="container mx-auto flex flex-col items-center justify-around pt-24" v-if="allProducts">
      <div class="">
        <h2 class="text-2xl pb-4">Products</h2>
      </div>
      <div class="flex flex-wrap justify-around">
        <div v-for="product in allProducts" :key="product['product-id']">
          <ShopProductsPreview :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* html {
  scroll-behavior: smooth;
} */
.custom-shape-divider-bottom-1697729642 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1697729642 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 69px;
}

.custom-shape-divider-bottom-1697729642 .shape-fill {
    fill: #FFFFFF;
}
</style>
