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

const buyInstantly = async (product) => {
  try {
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
      router.push('/shop/checkout')
    }
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: 'Produkt seit wenigen Minuten nicht mehr verfügbar'
    })
  }
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
  <div class="bg-center bg-cover bg-fixed" :style="`background-image: url(${(product.images[0]) ? '/uploads/' + product.images[0] : '/uploads/shop/products/product-placeholder.png'})`">
    <div class="flex flex-col justify-center items-start min-h-screen pt-12 bg-base-200/80 backdrop-blur-xl">

      <!-- Product Content -->
      <div class="container mx-auto flex flex-wrap h-full pt-12">
        <div class="w-full md:w-1/4 m-8 h-full flex flex-col justify-center items-center">
          <!-- Images -->
          <div class="">
            <div class="flex justify-center md:justify-end p-2">
              <img
                class="rounded border border-base-200 h-24 w-24 p-1 object-cover"
                v-if="product.images.length > 1"
                v-for="image in product.images"
                :src="(product.images) ? `/uploads/${image}` : '/uploads/shop/products/product-placeholder.png'"
                @click="selectImage(image)"
              >
            </div>
            <div class="">
              <img
                class="rounded border border-base-200 h-full w-full"
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
              class="px-6 py-4 btn-primary rounded-xl"
              @click="addToCart(product)"
            >
              In den Warenkorb {{ formatRealNumber(product.sellingPrice * quantity) }}€
            </button>
            <button
              class="px-6 py-4 btn-ghost border-primary rounded-xl mt-2"
              @click="buyInstantly(product)"
            >
              Sofort Kaufen {{ formatRealNumber(product.sellingPrice * quantity) }}€
            </button>

          <!-- Edit -->
          <button class="btn mt-2" v-if="status === 'authenticated'" @click="router.push(`/admin/shop/products/edit/${route.params.slug}`)">Edit</button>
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
        <div class="divider">
        </div>
        <div class="" v-if="product.comments">
          <h2 class="text-xl font-bold">Unser Kommentar</h2>
          <div class="prose" v-html="$mdit.render(product.comments)"></div>
        </div>
      </div>
    </div>
    <!-- Featured -->
    <section class="p-12 bg-base-200 w-full" v-if="similarProducts[0]">
      <div class="container mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-semibold">Ähnliche Produkte</h2>
        </div>
        <div class="relative mt-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 overflow-hidden">
            <!-- Featured Product Card 1 -->
            <NuxtLink
              class="bg-base-300 p-4 shadow-md rounded-lg slider relative hover:border-white tracking-wider leading-none overflow-hidden bg-cover bg-center h-[450px]"
              v-for="product in similarProducts"
              :style="`background-image: url('${(product.images[0]) ? `/uploads/${product.images[0]}` : 'shop/product-placeholder.png'}`"
              :to="`/shop/product/${product.slug}`"
            >
              <div class="flex flex-col justify-end items-start absolute inset-0 bg-base-100/90 backdrop-blur-xl p-8 rounded">
                <!-- <p class="text-base text-neutral mt-2">{{ product.description }}</p> -->
                <h1 class="text-2xl font-bold">{{ product.name }}</h1>
                <span class="font-bold">{{ formatRealNumber(product.sellingPrice) }}€</span>
                <a href="#" class="btn btn-primary mt-4">Shop Now</a>
              </div>
              <div class="absolute inset-0 flex justify-start items-start font-bold p-8">
              </div>
            </NuxtLink>
          </div>
          <!-- Slider Controls -->
          <!-- <div class="absolute right-0 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <button class="text-3xl text-accent focus:outline-none">&larr;</button>
            <button class="text-3xl text-accent focus:outline-none">&rarr;</button>
          </div> -->
        </div>
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
