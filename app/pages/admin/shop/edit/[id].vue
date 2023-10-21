<script setup lang="">
import { useProductsStore } from '../../../../stores/products'

const productsStore = useProductsStore()

const route = useRoute()

const product = computed(() => {
  return productsStore.products.find(p => p['product-id'].toString() === route.params.id)
})
</script>

 <template>
   <div class="pt-24">
     <ShopProductsEditor :product="product"/>
   </div>
 </template>
