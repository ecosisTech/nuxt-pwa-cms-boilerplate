<script setup lang="ts">
import { useProductsStore } from '../../../stores/products'
import { useClientsStore } from '../../../stores/clients'
import { useOrdersStore } from '../../../stores/orders'

const clientsStore = useClientsStore()
const ordersStore = useOrdersStore()

const router = useRouter()

const productsStore = useProductsStore()

const revenueYear = ref(89348.74)
const revenueMonth = ref(12231.89)
const revenueIncrement = computed(() => {
  return 0.2 * 100
})
const profit = ref(6245.35)
const margin = computed(() => {
  return (profit.value / revenueMonth.value) * 100
})

const selectedTab = ref('orders')

const selectTab = (tab) => {
  return selectedTab.value = tab
}
</script>

<template>
  <div class="container mx-auto pt-24">
    <div class="w-full text-center mt-4">
      <h1 class="text-xl pb-4 font-bold">Dashboard</h1>
    </div>
    <div class="flex flex-col justify-center items-center">

    <section class="grid gap-5 md:grid-cols-2">
      <!-- Revenue -->
      <div class="rounded-lg border border-error card bg-base-100 p-6">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium">Umsatz Oktober</p>
          <span class="shrink-0">
            <Icon name="heroicons:banknotes" class="h-4 w-4 text-muted-foreground" />
          </span>
        </div>

        <p class="mt-1.5 text-xl font-extrabold">{{ formatRealNumber(revenueMonth) }}€</p>
        <p class="text-xs text-muted-foreground"><span class="text-error font-bold">{{ formatRealNumber(revenueIncrement) }}% </span> weniger als letzen Monat</p>
      </div>
      <!-- Sales -->
      <div class="rounded-lg border border-success card bg-base-100 p-6">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium">Profit Oktober</p>
          <span class="shrink-0">
            <Icon name="heroicons:credit-card" class="h-4 w-4 text-muted-foreground" />
          </span>
        </div>

        <p class="mt-1.5 text-xl font-extrabold">{{ formatRealNumber(profit) }}€</p>
        <p class="text-xs text-muted-foreground"><span class="text-success font-bold">{{ formatRealNumber(margin) }}%</span> Marge</p>
      </div>
    </section>

    <!-- Sales List -->
    <div class="border border-base-300 bg-base-100 rounded rounded-xl my-4 w-full p-8">
      <div class="">
        <h1 class="text-xl font-medium">Sales</h1>
        <p>Umsatz 2023: <b>{{ formatRealNumber(revenueYear) }}€</b></p>
      </div>
      <div class="">
        <ShopAdminSales/>
      </div>
    </div>

    <section>
      <ShopAdminCustomersNew class="w-max-screen md:w-[800px]"/>
    </section>

    <section class="max-w-screen">
      <div class="w-full flex justify-center">
        <div class="tabs">
          <a class="tab tab-lg tab-lifted" :class="{ 'tab-active': selectedTab === 'user' }" @click="selectTab('user')">Nutzer</a>
          <a class="tab tab-lg tab-lifted" :class="{ 'tab-active': selectedTab === 'clients' }" @click="selectTab('clients')">Kunden</a>
          <a class="tab tab-lg tab-lifted" :class="{ 'tab-active': selectedTab === 'orders' }" @click="selectTab('orders')">Bestellungen</a>
          <a class="tab tab-lg tab-lifted" :class="{ 'tab-active': selectedTab === 'products' }" @click="selectTab('products')">Produkte</a>
          <a class="tab tab-lg tab-lifted" :class="{ 'tab-active': selectedTab === 'groups' }" @click="selectTab('groups')">Warengruppen</a>
          <a class="tab tab-lg tab-lifted" :class="{ 'tab-active': selectedTab === 'subgroups' }" @click="selectTab('subgroups')">Unterkategorien</a>
        </div>
      </div>

      <!-- User List -->
      <div class="border border-base-300 bg-base-100 rounded rounded-xl mb-4 w-full" v-if="selectedTab === 'user'">
        <div class="p-8">
          <h1 class="text-xl font-medium">Nutzer</h1>
          <p>Total: <b>{{ clientsStore.clients.length }}</b></p>
        </div>
        <div class="">
          <ShopAdminCustomers/>
        </div>
      </div>

      <!-- Client List -->
      <div class="border border-base-300 bg-base-100 rounded rounded-xl mb-4 w-full" v-if="selectedTab === 'clients'">
        <div class="p-8">
          <h1 class="text-xl font-medium">Kunden</h1>
          <p>Total: <b>{{ clientsStore.clients.length }}</b></p>
        </div>
        <div class="">
          <ShopAdminCustomers/>
        </div>
      </div>

      <!-- Order List -->
      <div class="border border-base-300 bg-base-100 rounded rounded-xl mb-4 w-full" v-if="selectedTab === 'orders'">
        <div class="p-8">
          <h1 class="text-xl font-medium">Bestellungen</h1>
          <p>Total: <b>{{ ordersStore.orders.length }}</b></p>
        </div>
        <div class="">
          <ShopAdminOrders/>
        </div>
      </div>

      <!-- Product List -->
      <div class="border border-base-300 bg-base-100 rounded rounded-xl mb-4 w-full" v-if="selectedTab === 'products'">
        <div class="p-8">
          <h1 class="text-xl font-medium">Produkte</h1>
          <p>Total: <b>{{ productsStore.products.length }}</b></p>
        </div>
        <div class="">
          <ShopAdminProducts/>
        </div>
      </div>

      <!-- Group List -->
      <div class="border border-base-300 bg-base-100 rounded mb-4 w-full" v-if="selectedTab === 'groups'">
        <div class="p-8">
          <h1 class="text-xl font-medium">Warengruppen</h1>
          <p>Total Groups: <b>2{{ productsStore.products.length }}</b></p>
        </div>
        <div class="">
          <ShopAdminProducts/>

          <!-- <ShopAdminGroups/> -->
        </div>
      </div>

      <!-- Subgroup List -->
      <div class="border border-base-300 bg-base-100 rounded mb-4 w-full" v-if="selectedTab === 'subgroups'">
        <div class="p-8">
          <h1 class="text-xl font-medium">Unterkategorien</h1>
          <p>Total Subgroups: <b>0</b></p>
        </div>
        <div class="">
          <ShopAdminProducts/>

          <!-- <ShopAdminSubgroups/> -->
        </div>
      </div>
    </section>

    </div>
  </div>
</template>
