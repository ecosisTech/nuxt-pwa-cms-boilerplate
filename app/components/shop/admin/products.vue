<script setup lang="ts">
import { useProductsStore } from '../../../stores/products'

const router = useRouter()

const productsStore = useProductsStore()
const JSON_Data = ref('')
const importJSON = async () => {
  await productsStore.importJSON(JSON_Data.value)
}

const selected = ref([])
</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded m-8 pb-8">
    <div class="flex flex-col justify-center items-center py-8">
      <h2>Import Data</h2>
      <p>Enter Data in JSON Format to import products</p>
      <div class="">
        <button class="btn" onclick="my_modal_2.showModal()">Import</button>
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
    <table class="table table-xs table-pin-rows table-pin-cols h-3/4">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>Name</th>
          <th>Brand</th>
          <th>Property Name</th>
          <th>Property Value</th>
          <th>Color</th>
          <th>More Properties</th>
          <th>Selling Price</th>
          <th>Buying Price</th>
          <th>EAN</th>
          <th>Quantity</th>
          <th>Group Name</th>
          <th>Group ID</th>
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
          <th>{{ item['selling-price'] }}</th>
          <th>{{ item['buying-price'] }}</th>
          <th>{{ item['EAN'] }}</th>
          <th>{{ item['quantity'] }}</th>
          <th>{{ item['group-name'] }}</th>
          <th>{{ item['group-id'] }}</th>
          <th>
            <button class="btn btn-ghost btn-xs" @click="router.push(`/admin/shop/edit/${item['product-id']}`)">details</button>
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Brand</th>
          <th>Property Name</th>
          <th>Property Value</th>
          <th>Color</th>
          <th>More Properties</th>
          <th>Selling Price</th>
          <th>Buying Price</th>
          <th>EAN</th>
          <th>Quantity</th>
          <th>Group Name</th>
          <th>Group ID</th>
          <th></th>
        </tr>
      </tfoot>

    </table>
  </div>
</template>
