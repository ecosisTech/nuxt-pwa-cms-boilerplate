<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const image = useAssets(`/uploads/shop/products/${ (props.product) ? props.product.image : 'product-placeholder.png'}`)

</script>
<template>
  <div>
    <div class="max-w-sm bg-base-300 rounded-lg border border-indigo-200 shadow-md m-2">
      <nuxt-link :to="`/shop/product/${product['product-id']}`">
        <div>
          <img class="rounded-t-lg h-80 w-96 object-cover hover:animate-pulse"
          :src="image"
          :alt="`${product.name}'s image`"
          >
        </div>
        <div class="p-5">
          <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight">
              {{ product.name }}
            </h5>
          </div>
          <p class="mb-3 font-medium">
            {{ product['selling-price'] }}€
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
