<script setup lang="ts">
import { useProductsStore } from '../../../stores/products'
import { useCategoriesStore } from '../../../stores/categories'

const route = useRoute()

const productsStore = useProductsStore()
const categoriesStore = useCategoriesStore()

const category = computed(() => {
  return categoriesStore.categories.find(c => {
    if (c.slug === route.params.category) {
      return c
    }
  })
})

const allProducts = computed(() => {
  let items = []
  for (let product of category.value.products) {
    items.push(productsStore.products.find(p => p.slug === product))
  }
  return items
})

const featuredProducts = computed(() => {
  let items = []
  for (let product of category.value.featured) {
    items.push(productsStore.products.find(p => p.slug === product))
  }
  return items
})

const subcategories = computed(async () => {
  let items = []
  for (let subcategory of category.value.subcategories) {
    let subcategory = await getSubcategory(category.slug, subcategory)
    items.push(subcategory)
  }
  return items
})

definePageMeta({
  auth: false,
})
</script>

<template>
  <div class="bg-cover bg-fixed" v-if="category" :style="`background-image: url('/uploads/${category.image}')`">
    <!-- Header --><!-- Hero Section -->
    <section class="relative overflow-hidden text-white">
      <div class="container mx-auto relative z-10">
        <!-- Hero Content -->
        <div class="flex items-end justify-center md:justify-start h-[350px]">
          <!-- Left Panel: Text -->
          <div class="text-neutral text-center md:text-left pb-12">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
              {{ category.name }}
            </h1>
            <!-- <p class="text-xl md:text-2xl lg:text-3xl mb-6">
              Die besten Produkte rund um <br> CDB, Raucherartikel und mehr.
            </p> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="bg-base-100/50 backdrop-blur-xl pt-12 border-t border-b border-base-100 -mt-4" id="categories">
      <div class="">
        <div class="text-center">
          <h2 class="text-3xl font-semibold">Unterkategorien</h2>
        </div>

        <ShopSubcategoriesGrid :category="category" v-if="category"/>
      </div>
    </section>

    <!-- Featured Products Section with Card Slider/Carousel -->
    <section class="p-12 bg-base-200" v-if="allProducts">
      <div class="container mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-semibold">Top Produkte</h2>
        </div>
        <div class="relative mt-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 overflow-hidden">
            <!-- Featured Product Card 1 -->
            <NuxtLink
              class="bg-base-300 p-4 shadow-md rounded-lg slider relative hover:border-white tracking-wider leading-none overflow-hidden bg-cover bg-center h-[450px]"
              v-for="product in allProducts"
              :style="`background-image: url('${(product.images[0]) ? `/uploads/${product.images[0]}` : 'shop/product-placeholder.png'}`"
              :to="`/shop/product/${product.slug}`"
            >
              <div class="flex flex-col justify-end items-start absolute inset-0 bg-base-100/90 backdrop-blur-xl p-8 rounded">
                <!-- <p class="text-base text-neutral mt-2">{{ product.description }}</p> -->
                <h1 class="text-2xl font-bold">{{ product.name }}</h1>
                <span class="font-bold">{{ formatRealNumber(product.sellingPrice) }}€</span>
                <a href="#" class="btn btn-primary mt-4">Shop Now</a>
              </div>
              <div class="absolute inset-0 flex justify-start items-start font-bold p-8">
              </div>
            </NuxtLink>
          </div>
          <!-- Slider Controls -->
          <!-- <div class="absolute right-0 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <button class="text-3xl text-accent focus:outline-none">&larr;</button>
            <button class="text-3xl text-accent focus:outline-none">&rarr;</button>
          </div> -->
        </div>
      </div>
    </section>

    <ShopProductsHero :products="allProducts" v-if="allProducts" class="w-full h-64"/>
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
