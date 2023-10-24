<script setup lang="ts">
import { useProductsStore } from '../../../../stores/products'

const router = useRouter()

const productsStore = useProductsStore()
const JSON_Data = ref('')
const importJSON = async () => {
  await productsStore.importJSON(JSON_Data.value)
}

const selected = ref([])
</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded rouned-xl px-4 py-8">

    <!-- Add Product Modal -->
    <div class="w-full flex justify-center">
      <NuxtLink class="btn" to="/admin/shop/products/new">Hinzufügen</NuxtLink>
      <div class="ml-2">
        <button class="btn" onclick="my_modal_2.showModal()">Importieren</button>
        <dialog id="my_modal_2" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg pb-4">Import Products</h3>
            <textarea class="textarea textarea-bordered w-full h-64" placeholder="JSON Format supported only" v-model="JSON_Data"></textarea>
            <button class="btn btn-success mt-2" @click="importJSON()">Import</button>
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
          <th>{{ item['property-name'] }}</th>
          <th>{{ item['property-value'] }}</th>
          <th>{{ item['color'] }}</th>
          <th>{{ item['properties'] }}</th>
          <th>{{ item['EAN'] }}</th>
          <th>{{ item['selling-price'] }}</th>
          <th>{{ item['buying-price'] }}</th>
          <th>{{ item['quantity'] }}</th>
          <th>
            <button class="btn btn-circle btn-sm" @click="router.push(`/admin/shop/products/edit/${item.slug}`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
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
