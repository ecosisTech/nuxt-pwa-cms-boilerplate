<script setup lang="ts">
import { useOrdersStore } from '../../../stores/orders'

const orderStore = useOrdersStore()
</script>

<template>
  <div class="container mx-auto mt-24">
    <ShopAdminOrders/>
  </div>
</template>
