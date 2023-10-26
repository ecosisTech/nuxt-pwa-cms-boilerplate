<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

// const image = useAssets(`/uploads/shop/products/product-placeholder.png`)
</script>
<template>
  <div>
    <div class="w- bg-base-100 rounded-lg border border-base-200 shadow-md m-2">
      <nuxt-link :to="`/shop/product/${product.slug}`">
        <div>
          <img class="rounded-t-lg h-80 w-full object-cover"
          :src="(product.images) ? `/uploads/shop/products/${product.images[0]}` : '/uploads/shop/products/product-placeholder.png'"
          >
        </div>
        <div class="p-5">
          <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight">
              {{ product.name }}
            </h5>
          </div>
          <p class="mb-3 font-medium">
            {{ product.sellingPrice.toFixed(2) }}€
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
