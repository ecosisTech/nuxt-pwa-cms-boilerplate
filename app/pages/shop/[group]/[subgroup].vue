<script setup lang="ts">
import { useProductsStore } from '../../../stores/products'

const route = useRoute()

const productsStore = useProductsStore()

const featuredProducts = computed(() => {
  return productsStore.products.filter(p => {
    if (p.featured === true) {
      return p
    }
  })
  // return productsStore.products
})

// const group = computed(() => {
//   return productsStore.groups.find(g => {
//     if (g.slug === route.params.group) {
//       console.log(g.slug);
//       console.log(route.params.group);
//       console.log(g);
//
//       return g.value
//     }
//   })
// })

const group = computed(() => {
  return productsStore.groups.find(g => {
    if (g.slug === route.params.group) {
      console.log(g);

      return g
    }
  })
})

const getSubgroupID = () => {
  let ID
  const res = productsStore.groups.find(g => {
    if (g.slug === route.params.group) {
      console.log(g);

      return g
    }
  })

  const subgroup = res.find(sg => {
    if (sg.slug === route.params.subgroup) {
      ID = sg.id
    }
  })

  return ID
}

const allProducts = computed(() => {
  return productsStore.products.filter(p => {
    console.log(route.params.subgroup);

    if (p['subgroup-id'] === getSubgroupID()) {
      console.log(p);

      return p
    }
  })
})

// const bannerImage = computed(() => {
//   // return
// })
</script>

<template>
  <div class="" v-if="group">
    <div class="w-full flex justify-end p-12 bg-cover bg-fixed bg-center bg-no-repeat" :class="`bg-[url(/uploads/shop/groups/${group.banner})] bg-cover bg-fixed bg-center bg-no-repeat`">
      <div class="flex flex-col justify-start items-center text-center w-full mt-24">
        <h1 class="text-3xl">{{ route.params.subgroup }}</h1>
      </div>
    </div>
    <div class="custom-shape-divider-bottom-1697729642">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="fill-base-200"></path>
      </svg>
    </div>
    <!-- <div class="flex flex-col items-center justify-around pt-16" v-if="groups" id="shop">
      <div class="">
        <h2 class="text-2xl pb-4">Top Produkte</h2>
      </div>
      <div class="flex flex-wrap justify-around">
        <div v-for="product in featuredProducts" :key="product['product-id']" class="flex-1">
          <ShopProductsFeatured :product="product"/>
        </div>
      </div>
    </div> -->
    <div class="container mx-auto flex flex-col items-center justify-around pt-24" v-if="allProducts">
      <div class="">
        <h2 class="text-2xl pb-4">Produkte</h2>
      </div>
      <div class="flex flex-wrap justify-around">
        <div v-for="product in allProducts" :key="product['product-id']">
          <ShopProductsPreview :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* html {
  scroll-behavior: smooth;
} */
.custom-shape-divider-bottom-1697729642 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1697729642 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 69px;
}

.custom-shape-divider-bottom-1697729642 .shape-fill {
    fill: #FFFFFF;
}
</style>
