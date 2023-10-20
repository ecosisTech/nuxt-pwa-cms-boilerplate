<script setup lang="ts">
import { useProductsStore } from '../../../stores/products'

const route = useRoute()

const productsStore = useProductsStore()

const featuredProducts = computed(() => {
  return productsStore.products.filter(p => {
    if (p.featured === true && p['group-id'] === group.value.id) {
      return p
    }
  })
  // return productsStore.products
})

// const group = computed(() => {
//   return productsStore.groups.find(g => {
//     if (g.slug === route.params.group) {
//       console.log(g.slug);
//       console.log(route.params.group);
//       console.log(g);
//
//       return g.value
//     }
//   })
// })

const group = computed(() => {
  return productsStore.groups.find(g => {
    if (g.slug === route.params.group) {
      return g
    }
  })
})

const allProducts = computed(() => {
  return productsStore.products.filter(p => {
    if (p['group-name'] === group.value.name) {
      return p
    }
  })
})

// const bannerImage = computed(() => {
//   // return
// })
</script>

<template>
  <div class="" v-if="group">
    <!-- Header -->
    <section>
      <div class="w-full flex flex-col justify-end pt-12 bg-cover bg-fixed bg-center bg-no-repeat" :style="{ 'background-image': `url(/uploads/shop/groups/${group.banner})` }">
        <div class="flex flex-col justify-start items-center text-center w-full mt-24">
          <h1 class="text-3xl text-white">{{ group.name }}</h1>
        </div>
        <div class="custom-shape-divider-bottom-1697729642">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="fill-base-200"></path>
          </svg>
        </div>
      </div>
    </section>

    <!-- Featured -->
    <section class="flex flex-col items-center justify-around pt-16 pb-8 w-screen" v-if="featuredProducts.length > 0">
      <div class="">
        <h2 class="text-2xl pb-4">Top Produkte</h2>
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
    <section class="bg-base-300 flex flex-col items-center justify-around pt-24 pb-12" v-if="group.subgroups.length > 0" id="shop">
      <div class="">
        <h2 class="text-2xl pb-4">Unterkategorien</h2>
      </div>
      <div class="flex flex-wrap justify-around">
        <div v-for="subgroup in group.subgroups" :key="subgroup.id" class="flex-1">
          <ShopProductsSubgroup :subgroup="subgroup"/>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section class="container mx-auto flex flex-col items-center justify-around pt-24" v-if="allProducts.length > 0">
      <div class="">
        <h2 class="text-2xl pb-4">Produkte</h2>
      </div>
      <div class="flex flex-wrap justify-around">
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
