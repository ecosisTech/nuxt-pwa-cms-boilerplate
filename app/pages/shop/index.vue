<script setup lang="ts">
import { useCategoriesStore } from '../../stores/categories'
import { useProductsStore } from '../../stores/products'

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

// Array of widths corresponding to each item
let widths = ['w-full', 'w-full md:w-1/3', 'w-full md:w-2/3', 'w-full md:w-1/2', 'w-full md:w-1/2', 'w-full md:w-2/3', 'w-full md:w-1/3', 'w-full md:w-1/2', 'w-full md:w-1/2'];
const categories = computed(() => {
  const categories = categoriesStore.categories
  categories.forEach((category, index) => {
    category.width = widths[index]
  });
  return categories
})

let subcategories = ref([])

const featuredProducts = computed(() => {
  return productsStore.products.filter(p => {
    if (p.featured === true) {
      return p
    }
  })
})
</script>
<template>
  <div :style="{ 'font-family': 'Inter Tight' }" style="background-image: url('/uploads/shop/banner2.jpg');" class="bg-cover bg-fixed">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter Tight">

    <!-- Hero Section -->
    <section class="relative overflow-hidden text-white">
      <!-- Hero Background -->
      <div class="absolute inset-0 bg-cover bg-fixed bg-left"></div>

      <div class="container mx-auto relative z-10">
        <!-- Hero Content -->
        <div class="flex items-end justify-center md:justify-start h-screen">
          <!-- Left Panel: Text -->
          <div class="text-neutral text-center md:text-left pb-28">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
              Discover <br> Your Way
            </h1>
            <p class="text-xl md:text-2xl lg:text-3xl mb-6">
              Die besten Produkte rund um <br> CDB, Raucherartikel und mehr.
            </p>
            <NuxtLink to="#categories" class="btn slider btn-primary btn-ghost bg-base-200/70 backdrop-blur-xl outline outline-gray-500 outline-1 outline-thin text-lg md:text-xl lg:text-2xl px-6 md:px-8 lg:px-10">Entdecken</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="bg-base-100/50 backdrop-blur-xl pt-12 border-t border-b border-base-100 -mt-4" id="categories">
      <div class="">
        <div class="text-center">
          <h2 class="text-3xl font-semibold">Kategorien</h2>
          <p class="mt-4 text-base text-neutral">
          </p>
        </div>

        <ShopCategoriesGrid/>
      </div>
    </section>

    <!-- Featured Products Section with Card Slider/Carousel -->
    <section class="p-12 bg-base-200">
      <div class="container mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-semibold">Top Produkte</h2>
        </div>
        <div class="relative mt-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 overflow-hidden">
            <!-- Featured Product Card 1 -->
            <NuxtLink
              class="bg-base-300 p-4 shadow-md rounded-lg slider relative hover:border-white tracking-wider leading-none overflow-hidden bg-cover bg-center h-[450px]"
              v-for="product in featuredProducts"
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

    <ShopProductsHero :products="featuredProducts" v-if="featuredProducts" class="w-full h-64"/>
  </div>
</template>
<style>

.slider div:first-child{
  transform: translateX(-100%);
  transition: transform .3s ease-in
}
.slider:hover div{
  transform: translateY(0)
}
</style>
