<script setup lang="ts">
definePageMeta({
  layout: 'admin',
});
</script>

<template>
  <div class="content mx-auto">
    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
      <div class="collapse-title text-xl font-medium">
        <ShopAdminProducts/>
      </div>
      <div class="collapse-content">
        <ShopAdminProducts/>
      </div>
    </div>
  </div>
</template>
