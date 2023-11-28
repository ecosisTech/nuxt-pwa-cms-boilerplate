<template>
  <section class="overflow-hidden text-white flex flex-col md:flex-wrap justify-center items-center md:flex-row-reverse bg-no-repeat bg-center bg-cover h-screen" style="background-image: url('/uploads/hero.svg')">
    <div class="w-full md:w-1/2 flex justify-center items-center">
      <img src="/uploads/hero.png" class="scale-25">
    </div>

    <div class="w-full md:w-1/2 z-10 flex justify-center items-center">
      <div class="text-neutral text-center md:text-left">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight" @click="(state === 'autenticated' && role == 'admin') ? edit('header') : undefined">
          Discover <br> Your Way
        </h1>
        <p class="text-xl md:text-2xl lg:text-3xl mb-6">
          Die besten Produkte rund um <br> CDB, Raucherartikel und mehr.
        </p>
        <NuxtLink
          :to="{ path: '/shop', hash: '#search' }"
          class="btn btn-accent text-lg md:text-xl lg:text-xl px-6 md:px-8 lg:px-10">
          Los geht's
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style>
</style>
