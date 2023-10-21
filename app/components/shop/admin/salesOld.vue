<script setup lang="ts">
import { useProductsStore } from '../../../stores/products'

const router = useRouter()

const productsStore = useProductsStore()

const sales = ref([])
</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded m-8 pb-8">
    <table class="table table-xs table-pin-rows table-pin-cols h-3/4">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>Full Name</th>
          <th>E-Mail</th>
          <th>Products</th>
          <th>Address</th>
          <th>Paid</th>
          <th>Shipped</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="item in sales" class="hover:bg-base-200">
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
          <th>
            <button class="btn btn-ghost btn-xs" @click="router.push(`/admin/shop/edit/${item['product-id']}`)">details</button>
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th></th>
          <th>Full Name</th>
          <th>E-Mail</th>
          <th>Products</th>
          <th>Address</th>
          <th>Paid</th>
          <th>Shipped</th>
          <th></th>
        </tr>
      </tfoot>

    </table>
  </div>
</template>
