<script setup lang="ts">
const orders = await getAllOrders()

//
// const slider = ref(null)
//
// onMounted(() => {
//   console.log(slider);
//
//   let isDown = false
//   let startX
//   let scrollLeft
//
//   slider.value.addEventListener('mousedown', (e) => {
//     isDown = true
//     slider.value.classList.add('active')
//     startX = e.pageX - slider.value.offsetLeft
//     scrollLeft = slider.value.scrollLeft
//   })
//   slider.value.addEventListener('mouseleave', () => {
//     isDown = false
//     slider.value.classList.remove('active')
//   })
//   slider.value.addEventListener('mouseup', () => {
//     isDown = false
//     slider.value.classList.remove('active')
//   })
//   slider.value.addEventListener('mousemove', (e) => {
//     if(!isDown) return
//     e.preventDefault()
//     const x = e.pageX - slider.offsetLeft
//     const walk = (x - startX) * 3 //scroll-fast
//     slider.scrollLeft = scrollLeft - walk
//     console.log(walk)
//   })
// })
</script>

<template>
  <section class="mt-5">
    <p class="font-bold text-center">Neue Bestellungen</p>
    <div class="w-full flex justify-center">      
      <NuxtLink class="flex shrink-0 flex-wrap items-center justify-center" to="/admin/shop/orders">
        <divider class="btn btn-circle bg-base-300 flex items-center justify-center mt-2">
          <!-- <Icon name="heroicons:plus" class="h-5 w-5" /> -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        </divider>
        <div class="pt-2">
          <divider class="text-sm font-semibold">Alle ansehen</divider>
        </div>
      </NuxtLink>
    </div>
    <div
      class="mt-5 flex w-full items-start gap-6 overflow-x-auto rounded-lg border bg-base-100 px-5 py-5 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md mb-8"
    >
      <div class="w-full flex justify-center items-center" v-if="!orders.length">
        <h2>Keine Bestellungen</h2>
      </div>
      <template v-for="n in data" v-else>
        <NuxtLink class="flex shrink-0 flex-col items-center gap-2" to="/admin/shop/oders">
          <img
            class="h-10 w-10 rounded-full object-cover"
            :src="n.picture.thumbnail"
            :alt="n.name.first"
          />
          <div class="text-center">
            <p class="text-sm font-semibold">{{ n.name.first }} {{ n.name.last }}</p>
            <p class="text-xs text-muted-foreground text-gray-500">seit ca. 10min</p>
            <p class="text-xs text-muted-foreground">3 Produkte</p>
            <p class="text-xs text-muted-foreground text-secondary">46,50 €</p>
          </div>
        </NuxtLink>
      </template>
    </div>
  </section>
</template>
