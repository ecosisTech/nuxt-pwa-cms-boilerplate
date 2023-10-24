<script setup lang="ts">
const router = useRouter()

const margin = computed(() => {
  return (shopOverviewData.value.monthlyProfit / shopOverviewData.value.monthlyRevenue) * 100
})

const selectedTab = ref('orders')

const selectTab = (tab) => {
  return selectedTab.value = tab
}

const currentDate = new Date();

const shopOverviewData = ref({
  monthlyRevenue: 0,
  monthlyProfit: 0,
  monthlyPerformance: 0,
  currentMonth: currentDate.getMonth(),
  yearlyRevenue: 0,
  yearlyProfit: 0,
  yearlyPerformance: 0, // No data for last year, assuming 0
  currentYear: currentDate.getFullYear(),
  totalAmountClients: 0,
  totalAmountRegisteredUser: 0,
  ammountOrderd: 0,
  shippedOrders: 0,
  totalAmountProducts: 0,
})
</script>

<template>
  <div class="container mx-auto pt-24">
    <div class="w-full text-center mt-4">
      <h1 class="text-xl pb-4 font-bold">Dashboard</h1>
    </div>
    <div class="flex flex-col items-center px-2">
      <div class="flex flex-wrap w-full justify-center">

        <section class="flex w-full md:w-1/3">
          <div class="flex flex-wrap justify-center items-center w-full my-4 px-2">

            <div class="flex flex-wrap justify-center items-center w-full">
              <!-- Revenue -->
              <div class="w-1/2">
                <div class="rounded-lg border border-error card bg-base-100 p-4 m-2">
                  <div class="flex items-center justify-between">
                    <p class="text-sm font-medium">Umsatz {{ shopOverviewData.currentMonth.toString() }}</p>
                    <span class="shrink-0">
                      <Icon name="heroicons:banknotes" class="h-4 w-4 text-muted-foreground" />
                    </span>
                  </div>

                  <p class="mt-1.5 text-xl font-extrabold">{{ formatRealNumber(shopOverviewData.monthlyRevenue) }}€</p>
                  <p class="text-xs text-muted-foreground"><span class="text-error font-bold">{{ formatRealNumber(shopOverviewData.monthlyPerformance) }}% </span></p>
                </div>
              </div>

              <!-- Sales -->
              <div class="w-1/2">
                <div class="rounded-lg border border-success card bg-base-100 p-4 m-2">
                  <div class="flex items-center justify-between">
                    <p class="text-sm font-medium">Profit {{ shopOverviewData.currentMonth }}</p>
                    <span class="shrink-0">
                      <Icon name="heroicons:credit-card" class="h-4 w-4 text-muted-foreground" />
                    </span>
                  </div>

                  <p class="mt-1.5 text-xl font-extrabold">{{ formatRealNumber(shopOverviewData.yearlyProfit) }}€</p>
                  <p class="text-xs text-muted-foreground"><span class="text-success font-bold">{{ formatRealNumber(margin) }}%</span></p>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap justify-center items-center w-full">
              <!-- Product -->
              <div class="w-1/2">
                <div class="rounded-lg border border-base-300 card bg-base-100 p-4 m-2">
                  <div class="flex items-center justify-between">
                    <p class="text-sm font-medium">Kunden</p>
                    <span class="shrink-0">
                      <Icon name="heroicons:credit-card" class="h-4 w-4 text-muted-foreground" />
                    </span>
                  </div>

                  <p class="mt-1.5 text-xl font-extrabold">{{ shopOverviewData.totalAmountClients }}</p>
                  <p class="text-xs text-muted-foreground"><span class="text-secondary font-bold">{{ shopOverviewData.totalAmountRegisteredUser }}</span> Registriert</p>
                </div>
              </div>

              <!-- Orders -->
              <div class="w-1/2">
                <div class="rounded-lg border border-base-300 card bg-base-100 p-4 m-2">
                  <div class="flex items-center justify-between">
                    <p class="text-sm font-medium">Bestellungen</p>
                    <span class="shrink-0">
                      <Icon name="heroicons:credit-card" class="h-4 w-4 text-muted-foreground" />
                    </span>
                  </div>

                  <p class="mt-1.5 text-xl font-extrabold">{{ shopOverviewData.ammountOrders }}</p>
                  <p class="text-xs text-muted-foreground"><span class="text-secondary font-bold">{{ shopOverviewData.shippedOrders }}</span> Verschickt</p>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap justify-center items-center w-full">
              <!-- Product -->
              <div class="w-1/2">
                <div class="rounded-lg border border-base-300 card bg-base-100 p-4 m-2">
                  <div class="flex items-center justify-between">
                    <p class="text-sm font-medium">Produkte</p>
                    <span class="shrink-0">
                      <Icon name="heroicons:credit-card" class="h-4 w-4 text-muted-foreground" />
                    </span>
                  </div>

                  <p class="mt-1.5 text-xl font-extrabold">{{ shopOverviewData.totalAmountProducts }}</p>
                  <p class="text-xs text-muted-foreground"><span class="text-secondary font-bold">{{ shopOverviewData.ammountOrders }}</span> Verkauft</p>
                </div>
              </div>

              <!-- Clients -->
              <div class="w-1/2">
                <div class="rounded-lg border border-base-300 card bg-base-100 p-4 m-2">
                  <div class="flex items-center justify-between">
                    <p class="text-sm font-medium">Kategorien</p>
                    <span class="shrink-0">
                      <Icon name="heroicons:credit-card" class="h-4 w-4 text-muted-foreground" />
                    </span>
                  </div>

                  <p class="mt-1.5 text-xl font-extrabold">{{ shopOverviewData.totalAmountProducts }}</p>
                  <p class="text-xs text-muted-foreground"><span class="text-secondary font-bold">14</span> Registriert</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Sales List -->
        <section class="border border-base-300 bg-base-100 rounded rounded-xl my-4 w-full md:w-2/3 p-8">
          <div class="">
            <h1 class="text-xl font-medium">Sales</h1>
            <!-- <p>Umsatz 2023: <b>{{ formatRealNumber(revenueYear) }}€</b></p> -->
          </div>
          <div class="">
            <ShopAdminSales/>
          </div>
        </section>
      </div>

      <section class="container mx-auto">
        <ShopAdminOrdersNew class="w-full"/>
      </section>
    </div>
  </div>
</template>
