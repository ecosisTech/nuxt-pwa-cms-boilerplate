<script setup lang="ts">
import { useOrdersStore } from '../../../../stores/orders'

const ordersStore = useOrdersStore()

const selected = ref([])

const orderDetails = ref({})

const viewOrder = (order) => {
  orderDetails.value = order
}
</script>
<template>
  <div class="">
    <div class="">
      <h1 class="font-bold text-2xl pb-4">Bestellungen</h1>
    </div>
    <div class="overflow-x-auto bg-base-100 rounded rounded-xl px-4 py-8">
      <!-- Table Data -->
      <table class="table table-xs table-pin-rows table-pin-col">
        <!-- head -->
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>Kunde</th>
            <th>Bestellungen</th>
            <th>Summe</th>
            <th>Bezahlt</th>
            <th>Versendet</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="order in ordersStore.orders" class="hover:bg-base-200">
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>
              <div class="flex items-center space-x-3">
                <div class="avatar mr-2">
                  <div class="mask mask-squircle w-12 h-12">
                    <img :src="order.client.picture.thumbnail" />
                  </div>
                </div>
                {{ order.client.name.title }} {{ order.client.name.first }} {{ order.client.name.last }}
              </div>
            </th>
            <th>{{ order.products.length }}</th>
            <th>{{ order.totalsum }}</th>
            <th>
              <svg v-if="order.paid" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </th>
            <th>
              <svg v-if="order.delivered" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </th>
            <th class="flex flex-wrap justify-center items-center">
              <button class="btn btn-circle ml-2" @click="viewOrder(order)" onclick="order_modal.showModal()" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </th>
          </tr>
        </tbody>
        <!-- foot -->
        <tfoot>
          <tr>
            <th></th>
            <th>Kunde</th>
            <th>Bestellungen</th>
            <th>Summe</th>
            <th>Bezahlt</th>
            <th>Versendet</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
      <!-- You can open the modal using ID.showModal() method -->
      <dialog id="order_modal" class="modal">
        <div class="modal-box w-11/12 max-w-5xl">

          <!-- <ShopAdminOrders :order="orderDetails"/> -->

        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  </div>
</template>
