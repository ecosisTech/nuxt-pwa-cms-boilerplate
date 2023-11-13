<script setup lang="ts">
import { useCategoriesStore } from '../../stores/categories'
import { useProductsStore } from '../../stores/products'

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

const featuredProducts = computed(() => {
  return productsStore.products.filter(p => {
    if (p.featured === true) {
      return p
    }
  })
})

const categories = ref([])
const expandedCategories = ref([]);

const handleCategoryClick = (clickedCategory, isExpanded) => {
  if (isExpanded) {
    // Replace the existing expanded category with the new one
    expandedCategories.value = [clickedCategory];
  } else {
    // If not expanded, remove the clicked category from the list
    expandedCategories.value = expandedCategories.value.filter(category => category !== clickedCategory);
  }
};

watchEffect(() => {
  categories.value = categoriesStore.categories.map(category => ({
    ...category,
    isExpanded: expandedCategories.value.includes(category),
  }));
});
</script>
<template>
  <div :style="{ 'font-family': 'Inter Tight' }" class="bg-cover bg-fixed">
  <!-- <div :style="{ 'font-family': 'Inter Tight' }" style="background-image: url('/uploads/shop/banner2.jpg');" class="bg-cover bg-fixed"> -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter Tight">

    <!-- Hero Section -->
    <section class="relative overflow-hidden text-white">
      <!-- Hero Background -->
      <div class="absolute inset-0 bg-cover bg-left" style="background-image: url('data:image/svg+xml,%3Csvg id=%22visual%22 viewBox=%220 0 900 600%22 class=%22w-full h-screen absolute z-0%22 xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 version=%221.1%22%3E%3Crect x=%220%22 y=%220%22 width=%22900%22 height=%22600%22 fill=%22%23000000%22%3E%3C/rect%3E%3Cpath d=%22M818 0L770.7 25C723.3 50 628.7 100 554 150C479.3 200 424.7 250 399 300C373.3 350 376.7 400 360.3 450C344 500 308 550 290 575L272 600L0 600L0 575C0 550 0 500 0 450C0 400 0 350 0 300C0 250 0 200 0 150C0 100 0 50 0 25L0 0Z%22 fill=%22%23080706%22%3E%3C/path%3E%3Cpath d=%22M276 0L261.5 25C247 50 218 100 211 150C204 200 219 250 271.3 300C323.7 350 413.3 400 447.2 450C481 500 459 550 448 575L437 600L0 600L0 575C0 550 0 500 0 450C0 400 0 350 0 300C0 250 0 200 0 150C0 100 0 50 0 25L0 0Z%22 fill=%22%23131211%22%3E%3C/path%3E%3Cpath d=%22M188 0L166.8 25C145.7 50 103.3 100 103.8 150C104.3 200 147.7 250 180.2 300C212.7 350 234.3 400 264.2 450C294 500 332 550 351 575L370 600L0 600L0 575C0 550 0 500 0 450C0 400 0 350 0 300C0 250 0 200 0 150C0 100 0 50 0 25L0 0Z%22 fill=%22%231a1919%22%3E%3C/path%3E%3C/svg%3E');">
      </div>

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
            <NuxtLink to="/shop/products" class="btn slider btn-primary btn-ghost bg-base-200/70 backdrop-blur-xl outline outline-gray-500 outline-1 outline-thin text-lg md:text-xl lg:text-2xl px-6 md:px-8 lg:px-10">Zu den Produkten</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="bg-base-100 pt-12 pb-8 border-t border-b border-base-100 h-auto -mt-8" id="categories">
      <div class="container mx-auto my-8">
        <div class="text-center">
          <h2 class="text-3xl font-semibold">Willkommen</h2>
          <p class="mt-4 text-base text-neutral">
            Entdecke den exklusiven Onlineshop für deine Raucherartikel. Wir heißen dich herzlich willkommen!
          </p>
          <div class="flex flex-wrap justify-center items-start pt-8 my-4">
            <div class="w-64 flex flex-col justify-center items-center py-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 stroke-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
              <h3 class="text-2xl font-bold pt-2">Sicher</h3>
              <p class="text-neutral mt-2">Genieße sicheres Einkaufen mit verschlüsselter Datenübertragung.</p>
            </div>
            <div class="w-64 flex flex-col justify-center items-center py-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 stroke-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>
              <h3 class="text-2xl font-bold pt-2">Unkompliziert</h3>
              <p class="text-neutral mt-2">Einfach und unkompliziert - finde, bestelle und erhalte deine Artikel schnell.</p>
            </div>
            <div class="w-64 flex flex-col justify-center items-center py-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 stroke-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <h3 class="text-2xl font-bold pt-2">Community basiert</h3>
              <p class="text-neutral mt-2">Trete unserer blühenden Community bei und teile deine Leidenschaft.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="divider container mx-auto py-8">
        <h3 class="text-2xl font-bold">Suche</h3>
      </div>

      <div class="container mx-auto">
        <ShopSearch/>
      </div>

      <div class="flex justify-center py-8">
        <NuxtLink to="/shop/products" class="btn slider btn-primary btn-ghost bg-base-200 outline outline-gray-500 outline-1 outline-thin text-lg md:text-xl lg:text-xl px-6 md:px-8 lg:px-10">Alle Produkte ansehen</NuxtLink>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="bg-base-200 -mt-4 w-full" id="categories">
      <div class="flex flex-wrap w-full">
        <div class="text-center md:text-right w-full md:w-1/4 mt-12 pr-8">
          <h2 class="text-6xl font-semibold">Kategorien</h2>
          <p class="mt-4 text-base text-neutral">
            Tauche ein in die Welt der besten Produkte <br>für Headshops und Raucherbedarf!
          </p>
        </div>
        <div class="w-full md:w-3/4">
          <div class="w-full">
            <ShopCategoriesGrid @clicked-category="handleCategoryClick"/>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div
          class="w-full bg-base-300"
          v-for="expandedCategory in expandedCategories"
          :key="expandedCategory.id"
        >
          <!-- <div class="w-full" v-if="expandedCategory.image">
            <img src="w-full" :src="`/uploads/${expandedCategory.image}`">
          </div> -->
          <div class="w-full pt-16">
            <h3 class="text-2xl font-bold text-center pb-4">{{ expandedCategory.name }}</h3>
            <p>{{ expandedCategory.description }}</p>
            <div class="flex justify-center items-center pb-4">
              <span class="italic flex items-center">
                <div class="badge badge-secondary badge-outline m-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                  {{ expandedCategory.products.length }} Produkte
                </div>

                <div class="badge badge-secondary badge-outline m-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/><path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/></svg>
                  {{ expandedCategory.subcategories.length }} Unterkategorien
                </div>
              </span>
            </div>
          </div>
          <ShopSubcategoriesGrid :category="expandedCategory"/>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="w-full flex flex-wrap bg-base-200">
      <div class="w-full md:flex-1 h-[500px] bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/7667911/pexels-photo-7667911.jpeg?auto=compress&cs=tinysrgb&w=500)">
        <!-- <img src="https://images.pexels.com/photos/7667725/pexels-photo-7667725.jpeg" alt=""> -->
      </div>
      <div class="w-full bg-cover bg-center md:flex-1 h-[500px] flex flex-col justify-center items-center">
        <div class="text-center">
          <h1 class="text-2xl font-bold pb-4">Verpasse nichts!</h1>
          <p>Bleib aktuell und bekomme die neuesten Produkten <br>direkt in dein Postfach!</p>
        </div>
        <div class="flex items-center mb-2 mt-8">
          <div class="flex items-center bg-base-100 rounded">
            <input class="input w-[400px] mr-1" placeholder="E-Mail" v-model="email" @keydown.enter.prevent="subscribing()">
            <button class="btn btn-ghost" @click="subscribing()">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-plus"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M19 16v6"/><path d="M16 19h6"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div class="w-full md:flex-1 h-[500px] bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/14521084/pexels-photo-14521084.jpeg?auto=compress&cs=tinysrgb&w=500)">
        <!-- <img src="https://images.pexels.com/photos/7667725/pexels-photo-7667725.jpeg" alt=""> -->
      </div>
    </section>

    <!-- Featured Products Section with Card Slider/Carousel -->
    <section class="p-12 bg-base-300">
      <div class="container mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-semibold">Top Produkte</h2>
          <p>Die zurzeit beliebtesten Produkte!</p>
        </div>
        <div class="relative mt-8">
          <div class="flex flex-wrap w-full gap-6 justify-center items-center overflow-hidden">
            <!-- Featured Product Card 1 -->
            <NuxtLink
              class="bg-base-300 p-4 shadow-md rounded-lg slider relative hover:border-white tracking-wider leading-none overflow-hidden bg-cover bg-center h-[450px] w-64"
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
