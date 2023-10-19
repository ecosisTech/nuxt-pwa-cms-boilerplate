<script setup lang="ts">
import { useProductsStore } from '../../../stores/products'

const router = useRouter()

const productsStore = useProductsStore()
</script>

<template>
  <div class="container mx-auto pt-24">
    <div class="w-full text-center mt-8">
      <h1 class="text-xl pb-4">Dashboard</h1>
    </div>
    <div class="flex flex-col justify-center items-center">

      <!-- Sales List -->
      <div class="border border-base-300 bg-base-100 rounded my-4 w-full">
        <div class="p-8">
          <h1 class="text-xl font-medium">Sales</h1>
          <p>Total Earnings: <b>0€</b></p>
        </div>
        <div class="">
          <ShopAdminSales/>
        </div>
      </div>

      <!-- Product List -->
      <div class="border border-base-300 bg-base-100 rounded my-4 w-full">
        <div class="p-8">
          <h1 class="text-xl font-medium">Product List</h1>
          <p>Total Products: <b>{{ productsStore.products.length }}</b></p>
        </div>
        <div class="">
          <ShopAdminProducts/>
        </div>
      </div>

      <!-- Group List -->
      <div class="border border-base-300 bg-base-100 rounded my-4 w-full">
        <div class="p-8">
          <h1 class="text-xl font-medium">Group List</h1>
          <p>Total Groups: <b>2{{ productsStore.groups.length }}</b></p>
        </div>
        <div class="">
          <ShopAdminGroups/>
        </div>
      </div>

      <!-- Subgroup List -->
      <div class="border border-base-300 bg-base-100 rounded my-4 w-full">
        <div class="p-8">
          <h1 class="text-xl font-medium">Subgroup List</h1>
          <p>Total Subgroups: <b>0</b></p>
        </div>
        <div class="">
          <ShopAdminSubgroups/>
        </div>
      </div>
    </div>
  </div>
</template>
