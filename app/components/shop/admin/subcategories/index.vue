<script setup lang="ts">
import { useCategoriesStore } from '../../../../stores/categories'

const router = useRouter()
const route = useRoute()

const categoriesStore = useCategoriesStore()

const subcategories = ref([])
const category = ref({})

const selected = ref([])

onBeforeMount(() => {
  category.value = categoriesStore.categories.find(c => c.slug === route.params.slug)
})

onMounted(async () => {
  if (category.value) {
    for (let slug of category.value.subcategories) {
      // console.log(slug);

      try {
        const subcategory = await getSubcategory(route.params.slug, slug)
        subcategories.value.push(subcategory)
      } catch (error) {
        console.log(error);
      }
    }
  }
  if (category.value) {
  }
})
</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded rouned-xl px-4 py-8">
    <div class="w-full flex justify-center">
      <NuxtLink class="btn" :to="`/admin/shop/categories/${route.params.slug}/new`">Hinzufügen</NuxtLink>
    </div>

    <!-- Table Data -->
    <table class="table table-xs table-pin-rows table-pin-col" v-if="category">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>Name</th>
          <th>Slug</th>
          <th>Produkte</th>
          <th>Featured</th>
          <th>Erstellt</th>
          <th>Aktualisiert</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="item in subcategories" class="hover:bg-base-200">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>{{ item.name }}</th>
          <th>{{ item.slug }}</th>
          <th>{{ item.products.length }}</th>
          <th>{{ item.featured.length }}</th>
          <th>{{ item.created }}</th>
          <th>{{ item.updated }}</th>
          <th>
            <button class="btn btn-circle btn-sm" @click="router.push(`/shop/${route.params.slug}/${item.slug}`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
            <button class="btn btn-circle btn-sm" @click="router.push(`/admin/shop/categories/${route.params.slug}/edit/${item.slug}`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
            </button>
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Slug</th>
          <th>Produkte</th>
          <th>Featured</th>
          <th>Erstellt</th>
          <th>Aktualisiert</th>
          <th></th>
        </tr>
      </tfoot>

    </table>
  </div>
</template>
