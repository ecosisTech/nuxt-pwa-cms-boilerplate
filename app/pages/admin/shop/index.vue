<script setup lang="ts">
import { useProductsStore } from '../../../stores/products'

const router = useRouter()

const productsStore = useProductsStore()

definePageMeta({
  layout: 'admin',
});
</script>

<template>
  <div class="container mx-auto">

    <!-- Sales List -->
    <div class="border border-base-300 bg-base-100 rounded my-4">
      <div class="p-8">
        <h1 class="text-xl font-medium">Sales</h1>
        <p>Total Earnings: <b>0€</b></p>
      </div>
      <div class="">
        <ShopAdminSales/>
      </div>
    </div>

    <!-- Product List -->
    <div class="border border-base-300 bg-base-100 rounded my-4">
      <div class="p-8">
        <h1 class="text-xl font-medium">Product List</h1>
        <p>Total Products: <b>{{ productsStore.products.length }}</b></p>
      </div>
      <div class="">
        <ShopAdminProducts/>
      </div>
    </div>

    <!-- Group List -->
    <div class="border border-base-300 bg-base-100 rounded my-4">
      <div class="p-8">
        <h1 class="text-xl font-medium">Group List</h1>
        <p>Total Groups: <b>2{{ productsStore.groups.length }}</b></p>
      </div>
      <div class="">
        <ShopAdminGroups/>
      </div>
    </div>

    <!-- Subgroup List -->
    <div class="border border-base-300 bg-base-100 rounded my-4">
      <div class="p-8">
        <h1 class="text-xl font-medium">Subgroup List</h1>
        <p>Total Subgroups: <b>0</b></p>
      </div>
      <div class="">
        <ShopAdminSubgroups/>
      </div>
    </div>
  </div>
</template>
