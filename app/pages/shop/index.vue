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
  return filterArrayByKeyword(allProducts.value, searchQuery.value)
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
const categoryIsOpen = ref(null)
const openCategory = async (category) => {
  if (categoryIsOpen.value.slug === category.slug) {
    return categoryIsOpen.value = null
  }
  try {
    let subcategories = []
    for (let slug of category.subcategories) {
      subcategories.push(await getSubcategory(category.slug, slug))
    }
    category.subcategories = subcategories
    categoryIsOpen.value = category
  } catch (error) {
    console.log(error);
  }
}

definePageMeta({
  auth: false,
})
</script>

<template>
  <div class="pt-4 space-y-8 mt-32">
    <!-- Hero Section -->
    <section class="container mx-auto ">
      <div class="text-center">
        <h1 class="text-3xl font-semibold">Herzlich Willkommen 🤗</h1>
        <p class="mt-4 text-lg text-gray-600">In unserem digitalen Headshop!</p>
      </div>
    </section>

    <!-- Search -->
    <section class="w-full bg-base-300">
      <div class="container mx-auto flex flex-col items-center justify-around py-8">
        <p>Durchsuch dich durch unsere Produkte</p>
        <NuxtLink class="btn btn-primary my-4" to="/shop/products">Zu allen Produkten</NuxtLink>
        <div class="w-full flex flex-col items-center">
          <input type="text" placeholder="Suche" class="input input-bordered input-lg w-full" v-model="searchQuery"/>
          <!-- <ShopSearch class="w-full"/> -->
          <ul class="menu xl:menu-horizontal w-screen bg-base-100 rounded-box mt-2 w-full md:w-[1080px]" v-if="searchQuery">
            <li>
              <a>Produkte</a>
              <ul class="flex flex-wrap w-full md:w-[900px]">
                <li class="w-1/2" v-for="product in searchResult"><NuxtLink :to="`/shop/product/${product.slug}`">
                  <img class="w-12 h-12 rounded-md" :src="`/uploads/${(product.images[0]) ? product.images[0] : 'shop/product-placeholder.png'}`"/>
                  <h2>
                    {{ product.name }}
                  </h2>
                </NuxtLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="container mx-auto">
      <div class="text-center">
        <h2 class="text-2xl font-semibold">Kategorien</h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
        <!-- Loop through your categories and display them here -->
        <!-- For example: -->
        <button v-for="category in categories" :key="category.id" class="bg-base-100 m-2 shadow-md rounded-md" @click="openCategory(category)">
          <img :src="(category.image) ? `/uploads/${category.image}` : '/uploads/shop/product-placeholder.png'" alt="Category Image" class="w-full h-64 object-cover rounded-md">
          <div class="py-2 text-center">
            <h3 class="mt-4 text-lg font-semibold">{{ category.name }}</h3>
          </div>
        </button>
        <div class="" v-if="categoryIsOpen">
          test
        </div>
      </div>
    </section>

    <!-- Featured -->
    <section class="flex flex-col items-center justify-around bg-[#1f2937] py-8" v-if="featuredProducts.length > 0">
      <div class="">
        <h2 class="text-3xl pb-4 text-white">Top Produkte</h2>
      </div>
      <div class="carousel w-full flex justify-center" ref="carouselRef">
        <div v-for="product in featuredProducts" :key="product.slug" class="carousel-item">
          <ShopProductsFeatured :product="product"/>
        </div>
      </div>

      <div class="flex justify-between pt-2">
        <a href="#prev" class="btn btn-circle m-1" @click="slideLeft()">❮</a>
        <a href="#next" class="btn btn-circle m-1" @click="slideRight()">❯</a>
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
