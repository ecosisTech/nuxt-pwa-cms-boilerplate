<script setup lang="ts">
import { useProductsStore } from '../../../stores/products'
import { useCategoriesStore } from '../../../stores/categories'

const route = useRoute()

const productsStore = useProductsStore()
const categoriesStore = useCategoriesStore()

const subcategory = await getSubcategory(route.params.category, route.params.subcategory)

const allProducts = computed(() => {
  let items = []
  for (let product of subcategory.products) {
    const res = productsStore.products.find(p => p.slug === product)
    items.push(res)
  }
  return items
})

const featuredProducts = computed(() => {
  let items = []
  for (let product of subcategory.featured) {
    items.push(productsStore.products.find(p => p.slug === product))
  }
  return items
})

definePageMeta({
  auth: false,
})
</script>

<template>
  <div class="" v-if="subcategory">
    <!-- Header -->
    <section class="">
      <!-- Featured -->
      <div class="w-full flex flex-col justify-end pt-16 bg-[#1f2937] bg-cover bg-fixed bg-center bg-no-repeat" :style="{ 'background-image': `url(/uploads/${subcategory.image})` }">
        <div class="flex flex-col justify-start items-center text-center w-full my-24">
          <div class="">
            <h2 class="text-3xl pb-4 text-white">{{ subcategory.name }}</h2>
          </div>
          <div class="carousel w-full flex justify-center" ref="carouselRef">
            <div v-for="product in featuredProducts" class="carousel-item" v-if="featuredProducts">
              <ShopProductsPreview :product="product"/>
            </div>
          </div>
        </div>
        <div class="flex justify-center pt-2">
          <a href="#prev" class="btn btn-circle mx-1" @click="slideLeft()">❮</a>
          <a href="#next" class="btn btn-circle mx-1" @click="slideRight()">❯</a>
        </div>
        <div class="custom-shape-divider-bottom-1697729642" id="shop">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="fill-base-200"></path>
          </svg>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section class="mx-auto flex flex-col items-center justify-around pt-16" v-if="allProducts.length > 0">
      <div class="">
        <h2 class="text-3xl pb-4">Produkte</h2>
      </div>
      <div class="flex flex-wrap justify-center">
        <div v-for="product in allProducts" v-if="allProducts">
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
