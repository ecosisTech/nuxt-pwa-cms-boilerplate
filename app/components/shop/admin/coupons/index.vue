<script setup lang="ts">
import { useProductsStore } from '../../../../stores/products'
import { useCategoriesStore } from '../../../../stores/categories'
import { useNotificationStore } from '../../../../stores/notifications'

const router = useRouter()

const productsStore = useProductsStore()
const categoriesStore = useCategoriesStore()
const notificationStore = useNotificationStore()

const propertyToSortWith = ref('name')
const ascending = ref(true)

const filterKeyword = ref('')
const coupons = computed(() => {
  return [] // filterArrayByKeyword(sortArrayByProperty(productsStore.products, propertyToSortWith.value, ascending.value), filterKeyword.value)
})

const sortWith = (prop) => {
  ascending.value = !ascending.value
  propertyToSortWith.value = prop
}

const currentPage = ref(1)
const nextPage = () => {
  // if (currentPage.value <= ) {
  //
  // }
}

const JSON_Data = ref('')
const importNewProducts = async () => {
  try {
    await importProducts(JSON.parse(JSON_Data.value))
    await productsStore.fetchProducts()
    await categoriesStore.fetchCategories()
    notificationStore.addNotification({
      type: 'success',
      msg: 'Products imported'
    })
  } catch (error) {
    notificationStore.addNotification({
      type: 'error',
      msg: error.message
    })
  }
}

const selected = ref([])
</script>
<template>
  <div class="overflow-x-auto bg-base-100 rounded rouned-xl px-4 py-8">

    <!-- Add Product Modal -->
    <div class="w-full flex justify-center mb-8">
      <div class="">
        <button class="btn" onclick="add_coupon.showModal()" disabled>+ Hinzufügen</button>
        <dialog id="add_coupon" class="modal">
          <div class="modal-box">
            <ShopAdminCouponsEditor :user="undefined"/>
          </div>

          <div class="flex flex-col pr-4">
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
    <div class="flex justify-center mb-4">
      <input class="input input-bordered input-xs w-1/3 py-4 bg-base-200" placeholder="Filter nach Stichwort" v-model="filterKeyword">
    </div>
    <!-- Table Data -->
    <table class="table table-xs table-pin-rows table-pin-col">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <!-- <label>
              <input type="checkbox" class="checkbox" />
            </label> -->
          </th>
          <th @click="sortWith('code')">Code</th>
          <th @click="sortWith('discount')">Rabatt</th>
          <th @click="sortWith('created')">Erstellt</th>
          <th @click="sortWith('updated')">Aktualisiert</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" class="hover:bg-base-200">
          <th>
            <!-- <label>
              <input type="checkbox" class="checkbox" />
            </label> -->
          </th>
          <th>{{ item['code'] }}</th>
          <th>{{ item['discount'] }}</th>
          <th>{{ item['created'] }}</th>
          <th>{{ item['updated'] }}</th>
          <th>
            <button class="btn btn-circle btn-sm mr-2" @click="router.push(`/admin/shop/products/edit/${item.slug}`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
            </button>
            <button class="btn btn-circle btn-sm" @click="router.push(`/shop/product/${item.slug}`)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th></th>
          <th>Code</th>
          <th>Rabatt</th>
          <th>Erstellt</th>
          <th>Aktualisiert</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </tfoot>

    </table>
    <div class="join flex justify-center pt-4">
      <button class="join-item btn" @click="currentPage = currentPage - 1">«</button>
      <button class="join-item btn" disabled>{{ currentPage }}</button>
      <button class="join-item btn" @click="currentPage = currentPage + 1">»</button>
    </div>
  </div>
</template>
