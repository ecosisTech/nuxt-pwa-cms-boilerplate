<script setup lang="ts">
const { category } = defineProps({
  category: Object
})

const subcategories = []
if (category.subcategories) {
  for (const subcategory of category.subcategories) {
    subcategories.push(await getSubcategory(category, subcategory))
  }
}
console.log(category);

</script>
<template>
  <NuxtLink
    class="h-[400px] slider px-10 py-5 relative hover:border-white tracking-wider leading-none overflow-hidden bg-cover bg-center"
    :style="`background-image: url('${(category.image) ? `/uploads/${category.image}` : '/uploads/shop/product-placeholder.png'}')`"
    :key="category.id"
    :to="`/shop/${category.slug}`"
  >
    <div class="flex justify-start items-start absolute inset-0 bg-base-200/60 backdrop-blur-xl">
      <div class="w-full md:w-auto text-left flex flex-col p-4">
        <span class="italic flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
          {{ category.products.length }} Produkte
        </span>
        <div class="w-full pt-4">
          <h2 class="font-bold">Unterkategorien</h2>
          <div class="pt-4 flex flex-wrap" v-if="subcategories">

            <!-- Subcategory -->
            <div class="bg-base-100 rounded m-1 w-64 h-24 bg-center bg-cover text-white" v-for="subcategory in subcategories" :style="`background-image: url('${(subcategory.image) ? `/uploads/${subcategory.image}` : '/uploads/shop/product-placeholder.png'}')`">
              <h3 class="pl-2 pt-1 font-bold">{{ subcategory.name }}</h3>
            </div>

          </div>
        </div>
      </div>
      <!-- <div class="w-full h-full md:w-auto text-center md:text-left flex flex-wrap justify-end items-center">
        <p>{{ category.description }}</p>
      </div> -->
    </div>
    <div class="absolute inset-0 flex justify-start items-end font-bold">
      <h1 class="text-2xl font-bold text-white text-left p-4">
        {{ category.name }}
      </h1>
    </div>
  </NuxtLink>
</template>
