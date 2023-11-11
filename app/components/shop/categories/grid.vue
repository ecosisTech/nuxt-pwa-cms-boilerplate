<script setup lang="ts">
import { useCategoriesStore } from '../../../stores/categories'
import Category from './category'

const categoriesStore = useCategoriesStore()

// Array of widths corresponding to each item
let widths = ['w-full', 'w-full md:w-1/3', 'w-full md:w-2/3', 'w-full md:w-1/2', 'w-full md:w-1/2', 'w-full md:w-2/3', 'w-full md:w-1/3', 'w-full md:w-1/2', 'w-full md:w-1/2'];
const categories = computed(() => {
  const categories = categoriesStore.categories
  categories.forEach((category, index) => {
    category.width = widths[index]
  });
  return categories
})
</script>
<template>
  <div class="flex flex-wrap justify-center bg-base-100 mt-8 w-full">
    <Category :class="category.width" v-for="category in categories" :category="category"/>
  </div>
</template>
