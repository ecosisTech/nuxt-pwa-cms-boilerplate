<script setup lang="ts">
import { useProductsStore } from '../../../stores/products'

const productsStore = useProductsStore()

definePageMeta({
  layout: 'admin',
});
</script>

<template>
  <div class="content mx-auto artboard artboard-horizontal phone-5 bg-base-100 m-8">
    <div class="overflow-x-auto">
      <table class="table rounded">
        <!-- head -->
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>Product</th>
            <th>Price</th>
            <th>Many</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="item in cartStore.items">
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img :src="useAssets(`/public/uploads/shop/products/${item.image}`)" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{{ item.name }}</div>
                  <div class="text-sm opacity-50">{{ item.price }}</div>
                </div>
              </div>
            </td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
        <!-- foot -->
        <tfoot>
          <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Many</th>
          <th></th>
          </tr>
        </tfoot>

      </table>
    </div>
  </div>
</template>
