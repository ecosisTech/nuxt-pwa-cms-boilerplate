<script setup lang="ts">
const router = useRouter()

definePageMeta({
  layout: 'admin',
});
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col">
      <div class="">
        <h1 class="text-xl font-bold">Administrate your Data</h1>
      </div>
      <div class="flex flex-wrap justify-around items-center m-8">

        <div class="card w-96 bg-base-300 m-4">
          <div class="card-body">
            <h2 class="card-title">Landingpage</h2>
            <p>Administrate the content of your <br><b>Landingpage</b>!</p>
            <div class="card-actions justify-end">
              <button class="btn" disabled>Coming soon</button>
            </div>
          </div>
        </div>

        <div class="card w-96 bg-base-300 m-4">
          <div class="card-body">
            <h2 class="card-title">Blog</h2>
            <p>Administrate the content of your <br><b>Blog</b>!</p>
            <div class="card-actions justify-end">
              <button class="btn" disabled>Coming soon</button>
            </div>
          </div>
        </div>

        <div class="card w-96 bg-primary m-4 text-primary-content">
          <div class="card-body">
            <h2 class="card-title">Shop</h2>
            <p>Administrate the content of your <br><b>Online Shop</b>!</p>
            <div class="card-actions justify-end">
              <button class="btn" @click="router.push('/admin/shop')">Enter</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
