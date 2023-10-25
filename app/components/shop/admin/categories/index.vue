<script setup lang="ts">
import { useCategoriesStore } from '../../../../stores/categories'

const router = useRouter()

const categoriesStore = useCategoriesStore()

const selected = ref([])
</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded rouned-xl px-4 py-8">
    <div class="w-full flex justify-center">
      <NuxtLink class="btn" to="/admin/shop/categories/new">Hinzufügen</NuxtLink>
    </div>

    <!-- Table Data -->
    <table class="table table-xs table-pin-rows table-pin-col">
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
          <th>Subkategorien</th>
          <th>Erstellt</th>
          <th>Aktualisiert</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="item in categoriesStore.categories" class="hover:bg-base-200">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>{{ item.name }}</th>
          <th>{{ item.slug }}</th>
          <th>{{ item.description }}</th>
          <th>{{ item.products.length }}</th>
          <th>{{ item.featured.length }}</th>
          <th>{{ item.subcategories.length }}</th>
          <th>{{ item.created }}</th>
          <th>{{ item.updated }}</th>
          <th>
            <button class="btn btn-circle btn-sm mr-2" @click="router.push(`/admin/shop/categories/edit/${item.slug}`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
            </button>
            <button class="btn btn-circle btn-sm" @click="router.push(`/admin/shop/categories/${item.slug}`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
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
          <th>Subkategorien</th>
          <th>Erstellt</th>
          <th>Aktualisiert</th>
          <th></th>
        </tr>
      </tfoot>

    </table>
  </div>
</template>
