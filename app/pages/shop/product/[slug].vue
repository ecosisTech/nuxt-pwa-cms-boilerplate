<script setup lang="ts">
import { useNotificationStore } from '../../../stores/notifications'
import { useUserStore } from '../../../stores/user'
import { useProductsStore } from '../../../stores/products'
import { useCartStore } from '../../../stores/cart'

// const { $mdit } = useNuxtApp()
const { status } = useAuth()
const notificationStore = useNotificationStore()

const productsStore = useProductsStore()
const userStore = useUserStore()
const cartStore = useCartStore()
const route = useRoute()
const router = useRouter()

const product = await getProduct(route.params.slug)

const quantity = ref(1)
const addToCart = async (product) => {
  if (product.quantity >= quantity.value) {
    cartStore.addToCart({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.sellingPrice,
      quantity: quantity.value
    })
    notificationStore.addNotification({
      type: 'success',
      msg: 'Produkt in den Warenkorb hinzugefügt'
    })
  } else {
    notificationStore.addNotification({
      type: 'error',
      msg: 'Produkt seit wenigen Minuten nicht mehr verfügbar'
    })
  }
}

const selectedImage = ref({})
const selectImage = (image) => {
  selectedImage.value = image
}

// TODO replace with Markdown
const formatText = (text) => {
  return text.replace(/\n/g, "<br />")
}

const similarProducts = ref([])

onMounted(async () => {
  if (product) {
    selectedImage.value = product.images[0]

    const filteredProducts = []
    if (product.similarProducts) {
      for (let slug of product.similarProducts) {
        const res = await getProduct(slug)
        filteredProducts.push(res)
      }
      similarProducts.value = filteredProducts
    }
  }
})

definePageMeta({
  auth: false,
})
</script>
<template>
  <div class="">
    <!-- Header -->
    <section>
      <div class="w-full flex flex-col justify-end bg-[#1f2937] bg-cover bg-fixed bg-center bg-no-repeat">
      <!-- <div class="w-full flex flex-col justify-end  bg-cover bg-fixed bg-center bg-no-repeat" :style="{ 'background-image': `url(/uploads/shop/products/${selectedImage})` }"> -->
        <div class="flex flex-col justify-start items-center text-center w-full h-24">
          <!-- <h1 class="text-3xl text-white">{{ group.name }}</h1> -->
        </div>
        <div class="custom-shape-divider-bottom-1697729642">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="fill-base-200"></path>
          </svg>
        </div>
      </div>
    </section>
    <div class="flex flex-col justify-center items-start min-h-screen pt-12">

      <!-- Product Content -->
      <div class="container mx-auto flex flex-wrap h-full">
        <div class="w-full md:w-1/4 m-8 h-full flex flex-col justify-center items-center">
          <!-- Images -->
          <div class="">
            <div class="flex justify-center md:justify-end p-2">
              <img
              class="rounded-3xl border border-base-200 h-24 w-24 p-1 object-cover"
                v-if="product.images.length > 1"
                v-for="image in product.images"
                :src="(product.images) ? `/uploads/${image}` : '/uploads/shop/products/product-placeholder.png'"
                @click="selectImage(image)"
              >
            </div>
            <div class="">
              <img
                class="rounded-3xl border border-base-200 h-full w-full"
                :src="(selectedImage) ? `/uploads/${selectedImage}` : '/uploads/shop/product-placeholder.png'"
              >
            </div>
          </div>

          <!-- Buy Button -->
          <div class="my-8 flex flex-col items-center justify-center md:items-end md:justify-end w-full">
            <div class="">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Menge: </span>
                </label>
                <input type="number" min="1" :max="product.quantity" class="input input-bordered w-24 max-w-xs" v-model="quantity"/>
              </div>
            </div>
            <span class="text-gray-500 italic text-left">MwSt inkl: {{ product.tax * 100 }} %</span>
            <button
              class="px-6 py-4 btn-success rounded-xl"
              @click="addToCart(product)"
            >
            In den Warenkorb {{ formatRealNumber(product.sellingPrice * quantity) }}€
          </button>

          <!-- Edit -->
          <button class="btn" v-if="status === 'authenticated'" @click="router.push(`/admin/shop/products/edit/${route.params.slug}`)">Edit</button>
        </div>
      </div>

      <!-- Product Description -->
      <div class="w-full md:w-2/4 lg:m-8 flex flex-col items-start justify-center">
        <div>
          <h2 class="text-5xl">{{ product.name }}</h2>
          <div class=" flex">
            <!-- <h3>Brand</h3> -->
            <h3 class="text-4xl font-bold text-primary">{{ product.brand }}</h3>
          </div>
          <div class="flex flex-col p-2">
            <div class="flex flex-col">
              <p>Produkt Farbe: {{ product.variants[0] }}</p>
              <!-- <div class="">
                <select class="select select-bordered w-full max-w-xs">
                  <option disabled selected>Wähle Farbe</option>
                  <option>Variante A</option>
                  <option>Variante B</option>
                </select>
              </div> -->
            </div>
            <div class="flex" v-if="product.propertyName">
              <p><span>{{ product.propertyName }}: </span>{{ product.propertyValue }}</p>
            </div>
          </div>
        </div>
        <div class="italic">
          <p>Auf Lager: <span>{{ product.quantity || 0 }}</span></p>
        </div>
        <div class="py-2">
          <div class="flex-1 " v-if="product.description">
            <h3 class="font-bold">Beschreibung: </h3>
            <!-- <p v-html="formatText(product.description)"></p> -->
            <div class="prose" v-html="$mdit.render(product.description)"></div>
          </div>
          <div class="flex-1 pt-4" v-if="product.facts">
            <h3 class="font-bold">Fakten: </h3>
            <div v-html="$mdit.render(product.facts)"></div>
            <!-- <p v-html="formatText(product.facts)"></p> -->
          </div>
        </div>
      </div>
    </div>
    <!-- Featured -->
    <section class="flex flex-col items-center justify-around bg-[#1f2937] py-8 w-screen" v-if="similarProducts.length > 0">
      <div class="">
        <h2 class="text-3xl pb-4 text-white">Ähnliche Produkte</h2>
      </div>
      <div class="carousel w-full flex justify-center" ref="carouselRef">
        <div v-for="product in similarProducts" :key="product.slug" class="carousel-item">
          <ShopProductsFeatured :product="product"/>
        </div>
      </div>

      <div class="flex justify-between pt-2">
        <a href="#prev" class="btn btn-circle" @click="slideLeft()">❮</a>
        <a href="#next" class="btn btn-circle" @click="slideRight()">❯</a>
      </div>
    </section>
  </div>

  </div>
</template>

<style scoped>
.custom-shape-divider-bottom-1697729642 {
    position: relative;
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
</style>
