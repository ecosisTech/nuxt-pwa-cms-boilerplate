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
    <NuxtLink class="card w-96  h-32 bg-base-100 shadow-xl image-full m-2" :to="`/shop/product/${product['product-id']}`">
      <figure><img class="object-cover" :src="(product.images) ? `/uploads/shop/products/${product.images[0]}` : '/uploads/shop/products/product-placeholder.png'" /></figure>
      <div class="card-body">
        <h2 class="card-title">{{ product.name }}</h2>
        <!-- <p>If a dog chews shoes whose shoes does he choose?</p> -->
        <div class="card-actions justify-end">
          <button class="btn btn-primary">
            {{ product['selling-price'].toFixed(2) }}€
          </button>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
