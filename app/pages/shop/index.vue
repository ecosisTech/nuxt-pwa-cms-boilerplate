<script setup lang="ts">
import { useCategoriesStore } from '../../stores/categories'
import { useProductsStore } from '../../stores/products'

const route = useRoute()

const categoriesStore = useCategoriesStore()
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

const categories = computed(() => {
  return categoriesStore.categories
})

const searchQuery = ref('')
const searchResult = computed(() => {


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

definePageMeta({
  auth: false,
})
</script>

<template>
  <div class="">
    <!-- Header -->
    <section class="">
      <!-- Featured -->
      <div class="w-full flex flex-col justify-end pt-16 bg-[url(/uploads/shop/banner.webp)] bg-cover bg-fixed bg-center bg-no-repeat">
        <div class="flex flex-col justify-start items-center text-center w-full my-24">
          <div class="">
            <h2 class="text-3xl pb-4 text-white">Top Produkte</h2>
          </div>
          <div class="carousel w-full flex justify-center" ref="carouselRef">
            <div v-for="product in featuredProducts" :key="product.slug" class="carousel-item">
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

    <!-- Search -->
    <section class="flex flex-col items-center justify-around py-8 w-screen">
      <div class="w-full md:w-1/3 flex flex-col items-center">
        <input type="text" placeholder="Suche" class="input input-bordered input-lg w-full" v-model="searchQuery"/>
        <!-- <ShopSearch class="w-full"/> -->
        <ul class="menu xl:menu-horizontal w-screen bg-base-100 rounded-box mt-2" v-if="searchQuery">
          <li>
            <a>Produkte</a>
            <ul>
              <li v-for="product in allProducts"><NuxtLink :to="`/shop/product/${product.slug}`">
                <img class="w-12 h-12" :src="'/uploads/' + product.images[0]"/>
                {{ product.name }}
              </NuxtLink></li>
            </ul>
          </li>
          <li>
            <a>Kategorien</a>
            <ul>
              <li v-for="category in categories"><NuxtLink :to="`/shop/${category.slug}`">
                <img class="w-12 h-12" :src="'/uploads/' + category.image"/>
                {{ category.name }}
              </NuxtLink></li>
              <li>
                <a>Unterkategorien</a>
                <ul>
                  <!-- <li v-for="subcategory in category.subcategories"><NuxtLink :to="`/shop/${category.slug}/${subcategory.slug }`">{{ subcategory.slug }}</NuxtLink></li> -->
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <!-- Groups -->
    <section class="flex flex-col items-center justify-around py-12 w-screen" v-if="categories.length > 0">
      <div class="">
        <h2 class="text-3xl pb-4">Kategorien</h2>
      </div>
      <div class="flex flex-wrap justify-around">
        <div v-for="category in categories" :key="category.slug" class="flex-1">
          <ShopProductsCategory :category="category"/>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section class="bg-base-300 mx-auto flex flex-col items-center justify-around pt-12 w-screen" v-if="allProducts.length > 0">
      <div class="">
        <h2 class="text-3xl pb-4">Alle Produkte</h2>
      </div>
      <div class="flex flex-wrap justify-center">
        <div v-for="product in allProducts" :key="product.slug">
          <ShopProductsPreview :product="product" class="max-w-sm"/>
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
