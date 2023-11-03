<script setup lang="ts">
import { useCategoriesStore } from '../../../stores/categories'
import { useProductsStore } from '../../../stores/products'

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()
const brands = computed(() => {
  const allBrands = []
  for (const product of productsStore.products) {
    if (!allBrands.find(p => p.brand === product.brand)) {
      allBrands.push(product.brand)
    }
  }
  return allBrands
})

const selectedCategory = ref('');
const selectedBrand = ref('');
const priceRange = ref(0);
const highestPrice = computed(() => {
  const max = Math.max(...productsStore.products.map((product) => product.sellingPrice))
  priceRange.value = max
  return max;
});
const showFeatured = ref(false);

const filteredProducts = computed(() => {
  return productsStore.products.filter((product) => {
    const categoryMatch =
      !selectedCategory.value || product.category === selectedCategory.value;

    const priceMatch = product.sellingPrice <= priceRange.value;

    const brandMatch = !selectedBrand.value || product.brand === selectedBrand.value;

    const featuredMatch = (product.featured) ? true : false;

    return categoryMatch && priceMatch && featuredMatch && brandMatch;
  });
});

const searchQuery = ref('')
const searchResult = computed(() => {
  return filterArrayByKeyword(filteredProducts.value, searchQuery.value)
})

</script>

<template>
  <div class="container mx-auto p-4 space-y-8 flex flex-wrap mt-24">
    <!-- Filters -->
    <section class="w-full md:w-1/4">
      <div class="flex">
        <div class="flex flex-col bg-base-100 p-4 shadow-md rounded-md">
          <h2 class="text-xl font-semibold">Filters</h2>
          <!-- Add your filter options here -->
          <div class="form-control w-full max-w-xs mt-4">
            <label class="block font-medium">Stichwort</label>
            <input placeholder="Type here" class="input input-bordered w-full max-w-xs" v-model="searchQuery"/>
          </div>
          <div class="mt-4">
            <label class="block font-medium">Kategory</label>
            <select v-model="selectedCategory" class="select select-bordered w-full">
              <option value="">Alle Kategorien</option>
              <option v-for="category in categoriesStore.categories" :value="category.slug">{{ category.name }}</option>
            </select>
          </div>
          <div class="mt-4">
            <label class="block font-medium">Marke</label>
            <select v-model="selectedBrand" class="select select-bordered w-full">
              <option value="">Alle Marken</option>
              <option v-for="brand in brands" :value="brand">{{ brand }}</option>
            </select>
          </div>
          <div class="mt-4">
            <label class="block font-medium">Preis bis <span class="font-bold">{{ priceRange }}€</span></label>
            <input type="range" min="0" :max="highestPrice" v-model="priceRange" class="range" />
          </div>
          <div class="mt-4">
            <label class="block font-medium">Angepinnte Produkte</label>
            <input type="checkbox" v-model="showFeatured" class="toggle" />
          </div>
        </div>
      </div>
    </section>

    <!-- Product List in Table Format -->
    <section class="w-full md:w-3/4">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- Table Head -->
          <thead>
            <tr>
              <th>
                <label>
                  <!-- <input type="checkbox" class="checkbox" /> -->
                </label>
              </th>
              <th>Name</th>
              <th>Marke</th>
              <th>Preis</th>
              <th></th>
            </tr>
          </thead>
          <!-- Table Body - Loop through products -->
          <tbody>
            <tr v-for="product in searchResult" :key="product.slug" class="bg-base-300 hover:bg-base-100">
              <td>
                <label>
                  <!-- <input type="checkbox" class="checkbox" /> -->
                </label>
              </td>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask rounded-md w-32 h-32">
                      <img :src="(product.images[0]) ? `/uploads/${product.images[0]}` : 'shop/product-placeholder.png'" alt="Product Image" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-xl">{{ product.name }}</div>
                    <div class="text-sm opacity-80">{{ getShortDescription(product.description, 45) }}</div>
                  </div>
                </div>
              </td>
              <td class="font-bold text-secondary">
                  {{ product.brand }}
              </td>
              <td class="w-16 font-bold">{{ product.sellingPrice }} €</td>
              <td>
                <button class="btn btn-primary btn-md">Zum Produkt</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
