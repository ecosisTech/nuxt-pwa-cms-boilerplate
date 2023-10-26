<script setup lang="ts">
import { useProductsStore } from '../../../../stores/products'
import { useCategoriesStore } from '../../../../stores/categories'
import { useNotificationStore } from '../../../../stores/notifications'

const router = useRouter()

const productsStore = useProductsStore()
const categoriesStore = useCategoriesStore()
const notificationStore = useNotificationStore()

const JSON_Data = ref('')
const importNewProducts = async () => {
  try {
    await importProducts(JSON.parse(JSON_Data.value))
    await productsStore.fetchProducts()
    await categoriesStore.fetchCategories()
    notificationStore.addNotification({
      type: 'success',
      msg: 'Products imported'
    })
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error.message
    })
  }
}

const selected = ref([])
</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded rouned-xl px-4 py-8">

    <!-- Add Product Modal -->
    <div class="w-full flex justify-center">
      <NuxtLink class="btn" to="/admin/shop/products/new">Hinzufügen</NuxtLink>
      <div class="ml-2">
        <button class="btn" onclick="import_products.showModal()">Importieren</button>
        <dialog id="import_products" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg pb-4">Import Products</h3>
            <textarea class="textarea textarea-bordered w-full h-64" placeholder="JSON Format supported only" v-model="JSON_Data"></textarea>
            <button class="btn btn-success mt-2" @click="importNewProducts()">Import</button>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
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
          <th>Marke</th>
          <th>Eigenschafts Name</th>
          <th>Eigenschafts Wert</th>
          <th>Farbe</th>
          <th>Weitere Eigenschaften</th>
          <th>EAN</th>
          <th>Preis (gekauft)</th>
          <th>Preis (Verkauf)</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="item in productsStore.products" class="hover:bg-base-200">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>{{ item['name'] }}</th>
          <th>{{ item['brand'] }}</th>
          <th>{{ item['propertyName'] }}</th>
          <th>{{ item['propertyValue'] }}</th>
          <th>{{ item['color'] }}</th>
          <th>{{ item['properties'] }}</th>
          <th>{{ item['EAN'] }}</th>
          <th>{{ item['sellingPrice'] }}</th>
          <th>{{ item['boughtPrice'] }}</th>
          <th>{{ item['quantity'] }}</th>
          <th>
            <button class="btn btn-circle btn-sm mr-2" @click="router.push(`/admin/shop/products/edit/${item.slug}`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
            </button>
            <button class="btn btn-circle btn-sm" @click="router.push(`/shop/product/${item.slug}`)">
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
          <th>Marke</th>
          <th>Eigenschafts Name</th>
          <th>Eigenschafts Wert</th>
          <th>Farbe</th>
          <th>Weitere Eigenschaften</th>
          <th>EAN</th>
          <th>Preis (gekauft)</th>
          <th>Preis (Verkauf)</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </tfoot>

    </table>
  </div>
</template>
