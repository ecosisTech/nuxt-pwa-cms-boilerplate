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
})

const groups = computed(() => {
  return productsStore.groups
})

const carouselRef = ref(null);
const currentItem = ref(0);

const slideLeft = () => {
  if (currentItem.value > 0) {
    currentItem.value--
  }
}

const slideRight = () => {
  if (currentItem.value < featuredProducts.length - 1) {
    currentItem.value++
  }
}
</script>

<template>
  <div class="">
    <!-- Header -->
    <section class="">
      <div class="w-full flex flex-col justify-end pt-24 bg-[url(/uploads/shop/banner.webp)] bg-cover bg-fixed bg-center bg-no-repeat">
        <div class="flex flex-col justify-start items-center text-center w-full mt-32">
          <img class="mt-36" src="/logo.png">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg> -->
          <!-- <NuxtLink class="btn rounded-xl mt-8" :to="{ path: '/shop', hash: '#shop' }">
            Los geht's!
          </NuxtLink> -->
        </div>
        <div class="custom-shape-divider-bottom-1697729642" id="shop">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="fill-base-200"></path>
          </svg>
        </div>
      </div>
    </section>

    <!-- Featured -->
    <section class="flex flex-col items-center justify-around py-8 w-screen" v-if="featuredProducts.length > 0">
      <div class="">
        <h2 class="text-3xl pb-4">Top Produkte</h2>
      </div>
      <div class="carousel w-full flex justify-center" ref="carouselRef">
        <div v-for="product in featuredProducts" :key="product['product-id']" class="carousel-item">
          <ShopProductsFeatured :product="product"/>
        </div>
      </div>

      <div class="flex justify-between pt-2">
        <a href="#prev" class="btn btn-circle" @click="slideLeft()">❮</a>
        <a href="#next" class="btn btn-circle" @click="slideRight()">❯</a>
      </div>
    </section>

    <!-- Groups -->
    <section class="bg-base-300 flex flex-col items-center justify-around py-12" v-if="groups.length > 0">
      <div class="">
        <h2 class="text-3xl pb-4">Warengruppen</h2>
      </div>
      <div class="flex flex-wrap justify-around">
        <div v-for="group in groups" :key="group.id" class="flex-1">
          <ShopProductsGroup :group="group"/>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section class="container mx-auto flex flex-col items-center justify-around pt-12" v-if="allProducts.length > 0">
      <div class="">
        <h2 class="text-3xl pb-4">Products</h2>
      </div>
      <div class="flex flex-wrap justify-center">
        <div v-for="product in allProducts" :key="product['product-id']">
          <ShopProductsPreview :product="product"/>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.custom-shape-divider-bottom-1697729642 {
    position: relative;
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
</style>
