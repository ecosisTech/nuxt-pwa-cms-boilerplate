<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
    <div class="">
      <button class="btn">Button</button>
    </div>
    <NuxtWelcome />
  </div>
</template>
